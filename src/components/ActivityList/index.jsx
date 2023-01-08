import ActivityItem from './ActivityItem'

const ActivityList = ({ activities }) => {
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="flex max-w-3xl flex-col space-y-16">
        {activities.map((activity) => (
          <ActivityItem
            key={`${activity.title} ${activity.date}`}
            activity={activity}
          />
        ))}
      </div>
    </div>
  )
}

export default ActivityList
