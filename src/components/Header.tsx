import FloatingContainer from "./ui/FloatingContainer"
import CloseButton from "./ui/CloseButton"
import RegionSearch from "./ui/RegionSearch"

export default function Header({ onRegionSelect, isMinimal }: { onRegionSelect: (region: string | null) => void, isMinimal: boolean }) {
  if (isMinimal) {
    return (
      <header className="relative w-full h-full">
        <FloatingContainer 
          position="top-center" 
          className="flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 z-30"
        >
          <h1 className="text-base md:text-lg font-bold flex-shrink-0 text-white">
            Find
          </h1>
          
          <div className="flex-1 min-w-0">
            <RegionSearch onSelect={onRegionSelect} placeholder="Où voulez-vous aller ?" />
          </div>
          
          <CloseButton onClick={() => onRegionSelect(null)} />
        </FloatingContainer>
      </header>
    )
  }

  return (
    <header className="relative w-full h-full text-white flex flex-col">
        {/* Contenu centré simple */}
        <div className="flex-1 flex flex-col justify-center items-center px-6 z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Découvrez votre nouvelle aventure
          </h1>
          <div className="w-full max-w-md">
            <RegionSearch onSelect={onRegionSelect} />
          </div>
        </div>
        
        
        <video 
          className="absolute inset-0 w-full h-full object-cover -z-10"
          autoPlay 
          loop 
          muted
          playsInline
          src="bg.mp4"
        >
        </video>
    </header>
  )
}
