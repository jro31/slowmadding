import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'

const ActivityItem = ({ activity }) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={activity.url}>{activity.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={activity.date}
          className="md:hidden"
          decorate
        >
          {formatDate(activity.date)}
        </Card.Eyebrow>
        <Card.Description>{activity.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={activity.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(activity.date)}
      </Card.Eyebrow>
      {/* TODO: Add cover image */}
    </article>
  )
}

export default ActivityItem
