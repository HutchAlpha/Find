interface MapProps {
  selectedRegion: string | null
  center?: [number, number]
  zoom?: number
}

export default function Map({ selectedRegion }: MapProps) {
  // Coordonnées des régions normandes pour centrer la carte
  const regionCenters: Record<string, { lat: number; lng: number; zoom: number }> = {
    'Caen': { lat: 49.1829, lng: -0.3707, zoom: 18 },
    'Rouen': { lat: 49.4431, lng: 1.0993, zoom: 18 },
    'Le Havre': { lat: 49.4944, lng: 0.1079, zoom: 18 },
    'Bayeux': { lat: 49.2765, lng: -0.7025, zoom: 18 },
    'Cherbourg': { lat: 49.6337, lng: -1.6221, zoom: 18 },
    'Deauville': { lat: 49.3572, lng: 0.0725, zoom: 18 },
    'Honfleur': { lat: 49.4195, lng: 0.2325, zoom: 18 },
    'Étretat': { lat: 49.7073, lng: 0.2063, zoom: 18 }
  }

  const defaultCenter = { lat: 49.0, lng: 0.0, zoom: 8 }
  const currentRegion = selectedRegion && regionCenters[selectedRegion] ? regionCenters[selectedRegion] : defaultCenter

  // Utilisation d'OpenStreetMap Static (service gratuit)
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${currentRegion.lng - 0.1},${currentRegion.lat - 0.1},${currentRegion.lng + 0.1},${currentRegion.lat + 0.1}&layer=mapnik&marker=${currentRegion.lat},${currentRegion.lng}`

  return (
    <div className="w-full h-full bg-gray-100 rounded-lg overflow-hidden">
      <iframe
        src={mapUrl}
        className="w-full h-full border-0"
        title="Carte interactive"
        loading="lazy"
      />
    </div>
  )
}