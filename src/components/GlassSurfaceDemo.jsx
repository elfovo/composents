import GlassSurface from './GlassSurface.jsx';

const GlassSurfaceDemo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        {/* Exemple 1: Surface de verre simple */}
        <GlassSurface
          width={300}
          height={150}
          borderRadius={20}
          brightness={50}
          opacity={0.8}
          blur={15}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Surface Simple</h3>
            <p className="text-white/80 text-sm">Effet de verre basique</p>
          </div>
        </GlassSurface>

        {/* Exemple 2: Surface avec plus de distorsion */}
        <GlassSurface
          width={300}
          height={150}
          borderRadius={25}
          brightness={60}
          opacity={0.9}
          blur={20}
          displace={2}
          distortionScale={-200}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Surface Distordue</h3>
            <p className="text-white/80 text-sm">Effet avec distorsion</p>
          </div>
        </GlassSurface>

        {/* Exemple 3: Surface très transparente */}
        <GlassSurface
          width={300}
          height={150}
          borderRadius={15}
          brightness={30}
          opacity={0.6}
          blur={25}
          backgroundOpacity={0.1}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Surface Transparente</h3>
            <p className="text-white/80 text-sm">Effet très subtil</p>
          </div>
        </GlassSurface>

        {/* Exemple 4: Surface avec saturation élevée */}
        <GlassSurface
          width={300}
          height={150}
          borderRadius={30}
          brightness={70}
          opacity={0.95}
          blur={18}
          saturation={2}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-2">Surface Saturée</h3>
            <p className="text-white/80 text-sm">Couleurs plus vives</p>
          </div>
        </GlassSurface>
      </div>
    </div>
  );
};

export default GlassSurfaceDemo;


