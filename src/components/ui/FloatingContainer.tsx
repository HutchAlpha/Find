import type { ReactNode } from 'react'

interface FloatingContainerProps {
  children: ReactNode
  className?: string
  position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  size?: 'sm' | 'md' | 'lg'
}

const POSITION_CLASSES = {
  'top-center': 'top-6 left-4 right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 md:w-auto',
  'top-left': 'top-20 left-6',
  'top-right': 'top-6 right-6', 
  'bottom-left': 'bottom-6 left-6',
  'bottom-right': 'bottom-6 right-6'
} as const

const SIZE_CLASSES = {
  sm: 'p-3',
  md: 'p-4', 
  lg: 'p-6'
} as const

export default function FloatingContainer({ 
  children, 
  className = '', 
  position = 'top-left',
  size = 'md' 
}: FloatingContainerProps) {
  return (
    <div 
      className={`
        absolute z-20 
        ${POSITION_CLASSES[position]} 
        bg-black/30 backdrop-blur-md rounded-xl shadow-xl border border-white/30 hover:border-white/50 hover:shadow-2xl transition-all duration-300
        ${SIZE_CLASSES[size]}
        ${className}
      `}
    >
      {children}
    </div>
  )
}