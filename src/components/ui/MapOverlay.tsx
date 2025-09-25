import RegionSearch from "./RegionSearch"
import Activities from "./Activities"

interface MapOverlayProps {
  selectedRegion: string | null
  onRegionSelect: (region: string | null) => void
  onActivitySelect: (activity: string) => void
}

//ajoute la preposition correcte avant le nom de la région
export default function MapOverlay({ selectedRegion, onRegionSelect, onActivitySelect }: MapOverlayProps) {
  const getPreposition = (region: string) => {
    if (region.startsWith("Le ")) return "au";
    if (region.startsWith("La ")) return "à la";
    if (region.startsWith("Les ")) return "aux";
    if (region.startsWith("L'")) return "à l'";
    return "à";
  };

  const preposition = selectedRegion ? getPreposition(selectedRegion) : "à";
  const displayRegion = selectedRegion ? selectedRegion.replace(/^Le |^La |^Les |^L'/, "") : "";

  return (
    <div className="absolute top-25 left-4 w-80 bg-black/30 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl border border-white/30 hover:border-white/50 z-20 p-4 transition-all duration-300">
      {!selectedRegion ? (
        <div>
          <h3 className="font-bold text-white mb-3">Où voulez-vous aller ?</h3>
          <RegionSearch onSelect={onRegionSelect} />
        </div>
      ) : (
        <div>
          {/* En-tête avec région sélectionnée */}
          <div className="mb-4 p-3 bg-black/40 backdrop-blur-sm rounded-lg border border-white/20">
            <h3 className="font-bold text-white text-center">
              Nous sommes {preposition} <span className="text-blue-300">{displayRegion}</span>
            </h3>
          </div>

          {/* Section activités */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <Activities onActivitySelect={onActivitySelect} />
          </div>
        </div>
      )}
    </div>
  )
}