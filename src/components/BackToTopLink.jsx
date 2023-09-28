import { ChevronUpIcon } from '@heroicons/react/20/solid'

const BackToTopLink = () => {
  const handleClick = () =>
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

  return (
    <div className="mt-16 flex justify-center sm:mt-20">
      <div
        className="flex cursor-pointer items-center text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
        onClick={handleClick}
      >
        Back to top
        <ChevronUpIcon className="ml-1 h-4 w-4 stroke-current" />
      </div>
    </div>
  )
}

export default BackToTopLink
