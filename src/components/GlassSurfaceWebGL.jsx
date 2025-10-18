import { useEffect, useMemo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, MeshTransmissionMaterial, RoundedBox } from '@react-three/drei';
import { easing } from 'maath';
import * as THREE from 'three';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const createGlassColor = (brightness, opacity) => {
  const color = new THREE.Color();
  color.setHSL(0, 0, clamp(brightness / 100, 0, 1));
  color.lerp(new THREE.Color(0xffffff), clamp(opacity, 0, 1) * 0.25);
  return color;
};

const createAberrationColor = (redOffset, greenOffset, blueOffset) => {
  const color = new THREE.Color();
  const r = clamp(0.75 + redOffset / 120, 0, 1);
  const g = clamp(0.85 + greenOffset / 120, 0, 1);
  const b = clamp(0.95 + blueOffset / 120, 0, 1);
  color.setRGB(r, g, b);
  return color;
};

const GlassPane = ({
  aspect,
  borderRadius,
  brightness,
  opacity,
  saturation,
  distortionScale,
  redOffset,
  greenOffset,
  blueOffset,
  backgroundOpacity,
  pointer,
  pointerTarget
}) => {
  const meshRef = useRef(null);
  const highlightRef = useRef(null);

  const glassColor = useMemo(() => createGlassColor(brightness, opacity), [brightness, opacity]);
  const aberrationColor = useMemo(
    () => createAberrationColor(redOffset, greenOffset, blueOffset),
    [redOffset, greenOffset, blueOffset]
  );

  const width = aspect >= 1 ? aspect : 1;
  const height = aspect >= 1 ? 1 : 1 / Math.max(aspect, 1e-3);
  const depth = 0.18;
  const maxDimension = Math.max(width, height);
  const radius = clamp((borderRadius / Math.max(1, maxDimension * 100)) * maxDimension * 0.9, 0.02, 0.45);

  const chroma = clamp(Math.abs(redOffset - blueOffset) / 120 + 0.08, 0, 0.75);
  const distortion = clamp(Math.abs(distortionScale) / 240, 0, 0.7);
  const anisotropy = clamp(saturation * 0.2, 0.05, 1.5);
  const backplateOpacity = clamp(backgroundOpacity + opacity * 0.3, 0.04, 0.45);

  useEffect(() => {
    if (!pointer || !pointerTarget) {
      return;
    }

    let raf;
    let last = performance.now();

    const animation = (time) => {
      const delta = Math.min(0.12, (time - last) / 1000);
      last = time;

      easing.damp2(pointer, pointerTarget, 0.24, delta);

      const px = pointer.x;
      const py = pointer.y;

      if (meshRef.current) {
        easing.dampE(meshRef.current.rotation, [py * 0.35, -px * 0.35, 0], 0.25, delta);
        easing.damp3(meshRef.current.position, [px * 0.12, py * 0.12, 0], 0.25, delta);
        const baseScale = 1 + Math.abs(px * 0.03 + py * 0.03);
        const glowScale = clamp(baseScale, 0.98, 1.08);
        easing.damp3(meshRef.current.scale, [glowScale, glowScale, glowScale], 0.22, delta);
      }

      if (highlightRef.current) {
        easing.damp3(highlightRef.current.position, [px * 1.4, py * 1.4, 1.6], 0.22, delta);
      }

      raf = requestAnimationFrame(animation);
    };

    raf = requestAnimationFrame(animation);
    return () => cancelAnimationFrame(raf);
  }, [pointer, pointerTarget]);

  return (
    <group>
      <ambientLight intensity={clamp(0.25 + brightness / 120, 0.15, 1.1)} />
      <spotLight position={[1.8, 2.6, 3]} intensity={0.8} angle={0.6} penumbra={0.8} />
      <pointLight ref={highlightRef} position={[0, 0, 1.5]} intensity={0.9} />

      <RoundedBox ref={meshRef} args={[width, height, depth]} radius={radius} smoothness={10}>
        <MeshTransmissionMaterial
          backside
          resolution={512}
          distortion={distortion}
          distortionScale={distortion * 0.8}
          temporalDistortion={clamp(distortion * 0.6, 0, 0.5)}
          thickness={clamp(0.24 + opacity * 0.8, 0.24, 1.2)}
          roughness={clamp(0.18 + (1 - opacity) * 0.5, 0.12, 0.65)}
          anisotropy={clamp(anisotropy, 0.05, 1)}
          anisotropicBlur={clamp(anisotropy * 0.6, 0.05, 0.85)}
          chromaticAberration={chroma}
          fresnel={clamp(0.5 + chroma * 0.4, 0.5, 1.1)}
          clearcoat={1}
          clearcoatRoughness={0.2}
          iridescence={clamp(chroma * 1.2, 0, 1)}
          iridescenceIOR={1.3}
          envMapIntensity={clamp(1 + chroma * 1.8, 1, 3)}
          attenuationDistance={clamp(1.8 + opacity, 1, 4)}
          attenuationColor={aberrationColor}
          color={glassColor}
          toneMapped={false}
        />
      </RoundedBox>

      <mesh position={[0, 0, -depth * 0.6]}>
        <planeGeometry args={[width * 1.04, height * 1.04]} />
        <meshBasicMaterial
          color={new THREE.Color().setHSL(0.6, 0.35, clamp((brightness + 12) / 100, 0.3, 0.7))}
          opacity={backplateOpacity}
          transparent
        />
      </mesh>
    </group>
  );
};

const GlassSurfaceWebGL = ({
  containerRef,
  width,
  height,
  borderRadius,
  brightness,
  opacity,
  saturation,
  distortionScale,
  redOffset,
  greenOffset,
  blueOffset,
  backgroundOpacity = 0
}) => {
  const pointer = useMemo(() => new THREE.Vector2(), []);
  const pointerTarget = useMemo(() => new THREE.Vector2(), []);

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) {
      return;
    }

    const updatePointer = (event) => {
      const rect = container.getBoundingClientRect();
      if (!rect.width || !rect.height) {
        pointerTarget.set(0, 0);
        return;
      }

      const clientX = event.clientX ?? (event.touches && event.touches[0]?.clientX);
      const clientY = event.clientY ?? (event.touches && event.touches[0]?.clientY);

      if (typeof clientX !== 'number' || typeof clientY !== 'number') {
        return;
      }

      const x = ((clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((clientY - rect.top) / rect.height) * 2 - 1;

      pointerTarget.set(clamp(x, -1, 1), clamp(-y, -1, 1));
    };

    const resetPointer = () => {
      pointerTarget.set(0, 0);
    };

    container.addEventListener('pointermove', updatePointer, { passive: true });
    container.addEventListener('pointerleave', resetPointer);
    container.addEventListener('touchmove', updatePointer, { passive: true });
    container.addEventListener('touchend', resetPointer);
    container.addEventListener('touchcancel', resetPointer);

    return () => {
      container.removeEventListener('pointermove', updatePointer);
      container.removeEventListener('pointerleave', resetPointer);
      container.removeEventListener('touchmove', updatePointer);
      container.removeEventListener('touchend', resetPointer);
      container.removeEventListener('touchcancel', resetPointer);
    };
  }, [containerRef, pointerTarget]);

  const aspect = height > 0 ? width / height : 1;

  return (
    <div className="glass-surface__webgl" aria-hidden="true">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 0, 2.4], fov: 35 }}
        style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <GlassPane
          aspect={aspect || 1}
          borderRadius={borderRadius}
          brightness={brightness}
          opacity={opacity}
          saturation={saturation}
          distortionScale={distortionScale}
          redOffset={redOffset}
          greenOffset={greenOffset}
          blueOffset={blueOffset}
          backgroundOpacity={backgroundOpacity}
          pointer={pointer}
          pointerTarget={pointerTarget}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default GlassSurfaceWebGL;
