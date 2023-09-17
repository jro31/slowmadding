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
// TODO: You should be able to flip the direction of the timeline, so you can view it descending or ascending
// TODO: There should be a 'Compact' mode (as opposed to 'Detailed' mode), where all stays are the same length
// - This should perhaps be the default on mobile
// TODO: You should be able to filter the timeline by a particular country/stay, for example if I just want to see my stays in Bangkok or in China, I can select these from a dropdown
// - This should be pan-timeline, so if I select 'Bangkok', it shows me my stays in Bangkok from ALL timelines, perhaps under new 'timeline' headings, such as 'Digital nomad' or 'Backpacking trip'

import { useState } from 'react'
import Head from 'next/head'
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/24/outline'

import SimpleLayout from '@/components/SimpleLayout'
import TimelineComponent from '@/components/TimelineComponent'

import { parsedTimelineData } from '@/lib/timelineData'

import clsx from 'clsx'
import OverlayMenu from '@/components/OverlayMenu'
import { Popover } from '@headlessui/react'

const digitalNomad = 'Digital nomad'
const backpackingTrip = 'Backpacking trip'
const mexico08 = "Mexico '08"
const dalhousie = 'Dalhousie'
const canada05 = "Canada '05"

const startDate = 'Start date'
const endDate = 'End date'

const timelineDates = {
  [digitalNomad]: {
    [startDate]: '2022-10-07',
    [endDate]: null,
  },
  [backpackingTrip]: {
    [startDate]: '2008-11-20',
    [endDate]: '2018-11-29',
  },
  [mexico08]: {
    [startDate]: '2008-06-24',
    [endDate]: '2008-07-20',
  },
  [dalhousie]: {
    [startDate]: '2006-08-27',
    [endDate]: '2007-05-01',
  },
  [canada05]: {
    [startDate]: '2005-05-17',
    [endDate]: '2005-09-06',
  },
}

const introText = {
  [digitalNomad]: 'Where being a digital nomad has taken me.',
  [backpackingTrip]:
    'Before I was a digital nomad, I went on a backpacking trip that started with being a lifty in Canada in 2008, led to six years as an English teacher in Thailand and China, and finished with doing a coding bootcamp in Bali in 2018 that paved the way for me to become a software engineer, and ultimately a digital nomad.',
  [mexico08]: 'A university reunion in Mexico.',
  [dalhousie]:
    'A university exchange to Dalhouse University in Nova Scotia with some time to travel over the Christmas break.',
  [canada05]:
    'My first time travelling was on the summer break after my first year of university, starting with a couple of months working in Vancouver before going by boat up to Alaska, then by bus from Anchorage to New York.',
}

const toggleButtonClassnames =
  'h-6 w-6 cursor-pointer stroke-zinc-800 group-hover:stroke-teal-500 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400'

const Timeline = ({ timelines }) => {
  const [currentTimeline, setCurrentTimeline] = useState(digitalNomad)
  const [compactMode, setCompactMode] = useState(false)

  const handleModeToggle = () => setCompactMode((prevState) => !prevState)

  return (
    <>
      <Head>
        <title>Timeline</title>
        <meta
          name="description"
          content={timelines[currentTimeline].introText}
        />
      </Head>
      <SimpleLayout
        title="Timeline"
        intro={timelines[currentTimeline].introText}
      >
        {/* FIXME: This styling isn't ideal as the menu is no longer perfectly centred */}
        <div className="mb-3 flex">
          <div className="relative flex flex-1 justify-center md:hidden">
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
          <div className="hidden flex-1 justify-center md:flex">
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
          <div className="group flex flex-initial items-center rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20">
            {compactMode ? (
              <ArrowsPointingOutIcon
                onClick={handleModeToggle}
                className={toggleButtonClassnames}
              />
            ) : (
              <ArrowsPointingInIcon
                onClick={handleModeToggle}
                className={toggleButtonClassnames}
              />
            )}
          </div>
        </div>

        <TimelineComponent
          timelineData={timelines[currentTimeline].timelineData}
          compactMode={compactMode}
        />
      </SimpleLayout>
    </>
  )
}

export default Timeline

export async function getStaticProps() {
  let timelineDetails = {}

  Object.keys(timelineDates).map((timelineName) => {
    timelineDetails[timelineName] = {
      introText: introText[timelineName],
      timelineData: parsedTimelineData(
        timelineDates[timelineName][startDate],
        timelineDates[timelineName][endDate]
      ),
    }
  })

  return {
    props: {
      timelines: timelineDetails,
    },
  }
}
