import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline'

const toggleButtonClassnames =
  'h-6 w-6 cursor-pointer stroke-zinc-800 hover:stroke-teal-500 dark:stroke-zinc-500 dark:hover:stroke-zinc-400'

const ViewButtons = ({
  ascending,
  setAscending,
  compactMode,
  setCompactMode,
}) => {
  const handleAscendingToggle = () =>
    setAscending((prevAscending) => !prevAscending)
  const handleModeToggle = () =>
    setCompactMode((prevCompactMode) => !prevCompactMode)

  return (
    <div className="absolute right-0 flex flex-initial items-center gap-4 rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
      {ascending ? (
        <ArrowDownIcon
          onClick={handleAscendingToggle}
          className={toggleButtonClassnames}
        />
      ) : (
        <ArrowUpIcon
          onClick={handleAscendingToggle}
          className={toggleButtonClassnames}
        />
      )}
      {compactMode ? (
        <ArrowsPointingInIcon
          onClick={handleModeToggle}
          className={toggleButtonClassnames}
        />
      ) : (
        <ArrowsPointingOutIcon
          onClick={handleModeToggle}
          className={toggleButtonClassnames}
        />
      )}
    </div>
  )
}

export default ViewButtons
