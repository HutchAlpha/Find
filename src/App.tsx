import { useState } from 'react'
import { Header, Carte } from './components'

export default function App() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null)
  const isMapOpen = selectedRegion !== null

  const handleActivitySelect = (activity: string) => {
    setSelectedActivity(activity)
    console.log(`Activité sélectionnée: ${activity} dans ${selectedRegion} (précédente: ${selectedActivity})`)
  }

  return (
    <div className="h-screen w-full flex flex-col">
      {/* Header qui se réduit quand la carte est ouverte */}
      <div className={`${isMapOpen ? 'h-0' : 'flex-1'} transition-all duration-700 ease-out`}>
        <Header 
          onRegionSelect={setSelectedRegion}
          isMinimal={isMapOpen}
        />
      </div>
      
      {/* Carte qui prend 90% quand ouverte */}
      <div className={`${isMapOpen ? 'flex-1' : 'h-0'} transition-all duration-700 ease-out`}>
        <Carte 
          selectedRegion={selectedRegion} 
          onRegionSelect={setSelectedRegion}
          onActivitySelect={handleActivitySelect}
        />
      </div>
    </div>
  )
}
