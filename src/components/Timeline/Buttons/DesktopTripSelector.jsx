import clsx from 'clsx'

const DesktopTripSelector = ({
  timelines,
  currentTimeline,
  setCurrentTimeline,
}) => {
  return (
    <div className="hidden flex-1 justify-center lg:flex">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {Object.keys(timelines).map((timelineName) => (
          <li key={`${timelineName}-timeline-desktop-link`}>
            <div
              onClick={(e) => setCurrentTimeline(e.target.textContent)}
              className={clsx(
                'relative block cursor-pointer px-3 py-2 transition',
                currentTimeline === timelineName
                  ? 'text-teal-500 dark:text-teal-400'
                  : 'hover:text-teal-500 dark:hover:text-teal-400'
              )}
            >
              {timelineName}
              {currentTimeline === timelineName && (
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DesktopTripSelector
