import { useState } from 'react'

const REGIONS = [
  "Caen", "Rouen", "Le Havre", "Bayeux", "Cherbourg", "Deauville", "Honfleur", "Étretat"
]

interface RegionSearchProps {
  onSelect: (region: string) => void
  placeholder?: string
}

export default function RegionSearch({ onSelect, placeholder = "Où voulez-vous aller ?" }: RegionSearchProps) {
  const [search, setSearch] = useState('')
  const [showList, setShowList] = useState(false)
  const filtered = REGIONS.filter(r => r.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        onFocus={() => setShowList(true)}
        placeholder={placeholder}
        className="w-full px-4 py-3 text-base bg-black/60 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all duration-300"
      />
      {showList && (
        <div className="absolute left-0 right-0 mt-1 bg-black/80 border border-white/20 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
          {filtered.length > 0 ? filtered.map(region => (
            <button
              key={region}
              onClick={() => { setSearch(region); setShowList(false); onSelect(region) }}
              className="w-full text-left px-4 py-2 text-white hover:bg-white/10 focus:bg-white/10 transition-colors"
            >
              {region}
            </button>
          )) : (
            <div className="px-4 py-2 text-white/70">Aucune région trouvée</div>
          )}
        </div>
      )}
    </div>
  )
}
