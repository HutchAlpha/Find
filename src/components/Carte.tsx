import MapOverlay from "./ui/MapOverlay"
import Map from "./ui/Map"

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
      
      {/* Carte interactive avec Leaflet */}
      <div className="w-full h-full">
        <Map selectedRegion={selectedRegion} />
      </div>
      {/* Menu flottant en overlay - Recherche région d'abord */}
      <MapOverlay selectedRegion={selectedRegion} onRegionSelect={onRegionSelect} onActivitySelect={onActivitySelect} />

    </section>
  )
}