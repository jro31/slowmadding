import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { MinusCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'

const Bullet = ({ children, disposition }) => {
  const description = `${disposition
    .charAt(0)
    .toUpperCase()}${disposition.slice(1)} point`

  return (
    <div className="mt-2 flex gap-3">
      {disposition === 'positive' && (
        <CheckCircleIcon
          className="h-8 w-8 text-zinc-900 dark:text-zinc-100"
          aria-label={description}
        />
      )}
      {disposition === 'neutral' && (
        <MinusCircleIcon
          className="h-8 w-8 text-zinc-700 dark:text-zinc-300"
          aria-label={description}
        />
      )}
      {disposition === 'negative' && (
        <XCircleIcon
          className="h-8 w-8 text-zinc-500 dark:text-zinc-400"
          aria-label={description}
        />
      )}
      {children}
    </div>
  )
}

const Summary = ({ summaryPoints }) => {
  return Object.keys(summaryPoints).map((disposition) => (
    <div key={`${disposition}-container`} className="mb-10">
      {summaryPoints[disposition].map((point, index) => (
        <Bullet key={`${disposition}-point-${index}`} disposition={disposition}>
          {point}
        </Bullet>
      ))}
    </div>
  ))
}

export default Summary
