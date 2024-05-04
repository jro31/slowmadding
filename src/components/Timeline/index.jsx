// TODO: Add a table that details the number of days in each country
// TODO: Jazz-up the bullets - They could potentially be:
// - Numbers, starting from 1 at the bottom of the timeline that details how many stays I've had
// - Little flags of the country in question
// - A mix of both, where if I've only been to a place once, then it's a flag, but if I've been multiple times then it's a number corresponding to which stay it is
// TODO: Add images to some or all stays?
// - These should be on the opposite side of the timeline (desktop) or within the stay (mobile), and be a photo I took in that place.
// - Hide these in 'Compact' mode?
// TODO: Add Google Maps links to some or all stays?
// TODO: Add description to some or all stays?
// - Hide these in 'Compact' mode?
// TODO: Add the accommodation type somehow - feasibly using a logo in the bullet, such as a camping logo or an Airbnb logo
// TODO: There should be more empty space between stays (and countries) if there's a blank day or two between them
// TODO: You should be able to filter the timeline by a particular country/stay, for example if I just want to see my stays in Bangkok or in China, I can select these from a dropdown
// - This should be pan-timeline, so if I select 'Bangkok', it shows me my stays in Bangkok from ALL timelines, perhaps under new 'timeline' headings, such as 'Digital nomad' or 'Backpacking trip'

import { useState } from 'react'

import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline'
import { Popover } from '@headlessui/react'

import clsx from 'clsx'

import OverlayMenu from '../OverlayMenu'
import SimpleLayout from '../SimpleLayout'
import TimelineGraphic from './TimelineGraphic'
import BackToTopLink from '../BackToTopLink'

const toggleButtonClassnames =
  'h-6 w-6 cursor-pointer stroke-zinc-800 hover:stroke-teal-500 dark:stroke-zinc-500 dark:hover:stroke-zinc-400'

const Timeline = ({ timelines, digitalNomad }) => {
  const [currentTimeline, setCurrentTimeline] = useState(digitalNomad)
  const [ascending, setAscending] = useState(false)
  const [compactMode, setCompactMode] = useState(false)

  const handleAscendingToggle = () =>
    setAscending((prevAscending) => !prevAscending)
  const handleModeToggle = () =>
    setCompactMode((prevCompactMode) => !prevCompactMode)

  return (
    <SimpleLayout
      title="Timeline"
      intro={timelines[currentTimeline].introText}
      HeaderTag="div"
      TitleTag="h2"
      titleSize="small"
    >
      <div className="relative mb-3 flex">
        <div className="flex flex-1 justify-center lg:hidden">
          <OverlayMenu title={currentTimeline}>
            {Object.keys(timelines).map((timelineName) => (
              <li key={`${timelineName}-timeline-mobile-link`}>
                <Popover.Button
                  className="block py-2"
                  onClick={(e) => setCurrentTimeline(e.target.textContent)}
                >
                  {timelineName}
                </Popover.Button>
              </li>
            ))}
          </OverlayMenu>
        </div>

        {/* TODO: Is it possible to merge code duplicated in the desktop navbar without overcomplicating? */}
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
      </div>

      <TimelineGraphic
        timelineData={timelines[currentTimeline].timelineData}
        ascending={ascending}
        compactMode={compactMode}
      />

      <BackToTopLink />
    </SimpleLayout>
  )
}

export default Timeline
