interface CloseButtonProps {
  onClick: () => void
}

export default function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 bg-black/50 text-white hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
      aria-label="Fermer"
    >
      ✕
    </button>
  )
}