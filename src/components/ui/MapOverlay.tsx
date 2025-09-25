import RegionSearch from "./RegionSearch"
import Activities from "./Activities"

interface MapOverlayProps {
  selectedRegion: string | null
  onRegionSelect: (region: string | null) => void
  onActivitySelect: (activity: string) => void
}

export default function MapOverlay({ selectedRegion, onRegionSelect, onActivitySelect }: MapOverlayProps) {
  return (
    <div className="absolute top-25 left-4 w-80 bg-black/30 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl border border-white/30 hover:border-white/50 z-20 p-4 transition-all duration-300">
      {!selectedRegion ? (
        <div>
          <h3 className="font-bold text-white mb-3">Où voulez-vous aller ?</h3>
          <RegionSearch onSelect={onRegionSelect} />
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-white">Voici ce qu'il se trouve à {selectedRegion}</h3>
            <button onClick={() => onRegionSelect(null)} className="text-xs text-white/70 hover:text-white underline">Changer</button>
          </div>
          <Activities onActivitySelect={onActivitySelect} />
        </div>
      )}
    </div>
  )
}