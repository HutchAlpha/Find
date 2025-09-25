// Styles glassmorphism cohérents pour tout le projet
export const glassmorphismStyles = {
  // Base glassmorphism - fond sombre
  base: 'bg-black/30 backdrop-blur-md border border-black/20',
  
  // Glassmorphism avec hover
  interactive: 'bg-black/30 backdrop-blur-md border border-black/20 hover:bg-black/40 hover:border-black/30 transition-all duration-300',
  
  // Glassmorphism actif/sélectionné
  active: 'bg-white/20 backdrop-blur-md border border-white/30',
  
  // Header glassmorphism
  header: 'bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-md border-b border-white/10',
  
  // Menu flottant
  floating: 'bg-black/30 backdrop-blur-md border border-black/20 shadow-xl',
  
  // Input glassmorphism
  input: 'bg-black/30 backdrop-blur-md border border-white/30 focus:border-white/60 focus:bg-black/40',
  
  // Transitions communes
  transitions: 'transition-all duration-300',
  
  // Ombres
  shadows: {
    sm: 'shadow-lg hover:shadow-xl',
    md: 'shadow-xl hover:shadow-2xl',
    lg: 'shadow-2xl'
  }
} as const;

// Classes Tailwind communes pour texte
export const textStyles = {
  primary: 'text-white',
  secondary: 'text-white/80',
  muted: 'text-white/60',
  interactive: 'hover:text-white'
} as const;