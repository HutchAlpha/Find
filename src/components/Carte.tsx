import MapOverlay from "./ui/MapOverlay"

export default function Carte({
  selectedRegion,
  onRegionSelect,
  onActivitySelect
}: {
  selectedRegion: string | null
  onRegionSelect: (region: string | null) => void
  onActivitySelect: (activity: string) => void
}) {
  const isOpen = selectedRegion !== null

  return (
    <section className={`w-full bg-white text-black relative overflow-hidden transition-all duration-700 ease-out ${
      isOpen ? 'h-full' : 'h-0'
    }`}>
      
      {/* Zone de carte pleine largeur */}
      <div className="w-full h-full bg-green-500">
        <img
          src="https://staticmapmaker.com/img/google-placeholder.png"
          alt="Carte interactive"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Menu flottant en overlay - Recherche région d'abord */}
      <MapOverlay selectedRegion={selectedRegion} onRegionSelect={onRegionSelect} onActivitySelect={onActivitySelect} />

    </section>
  )
}