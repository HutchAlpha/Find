interface Activity {
  id: string
  name: string
}

const ACTIVITIES: Activity[] = [
  { id: 'restaurants', name: 'Restaurants' },
  { id: 'hotels', name: 'Hôtels' },
  { id: 'loisirs', name: 'Loisirs' },
  { id: 'sport', name: 'Sport' },
  { id: 'culture', name: 'Culture' },
  { id: 'transport', name: 'Transport' },
  { id: 'shopping', name: 'Shopping' },
  { id: 'randonnee', name: 'Randonnée' }
]

interface ActivitiesProps {
  onActivitySelect: (activity: string) => void
}

export default function Activities({ onActivitySelect }: ActivitiesProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-bold text-white mb-4">Que voulez-vous faire ?</h3>
      <div className="space-y-2">
        {ACTIVITIES.map((activity) => (
          <button
            key={activity.id}
            onClick={() => onActivitySelect(activity.id)}
            className="w-full px-4 py-3 text-left bg-black/60 border border-white/30 rounded-xl text-white hover:border-white/50 hover:bg-black/70 focus:outline-none focus:border-white/50 focus:bg-black/70 transition-all duration-300"
          >
            {activity.name}
          </button>
        ))}
      </div>
    </div>
  )
}