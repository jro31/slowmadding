// TODO: Add a table that details the number of days in each country
// TODO: Add in a separate 'backpacking' timeline that details 2008 - 2018
// TODO: Jazz-up the bullets - They could potentially be:
// - Numbers, starting from 1 at the bottom of the timeline that details how many stays I've had
// - Little flags of the country in question
// - A mix of both, where if I've only been to a place once, then it's a flag, but if I've been multiple times then it's a number corresponding to which stay it is
// TODO: Add images to some or all stays?
// - These should be on the opposite side of the timeline, and be a photo I took in that place. Join these to the bullet with a line.
// TODO: Make clearer the length of each stay
// - Currently a short stay looks much longer than it is if it's surrounded by longer stays. Make it more obvious how long a stay is by highlighting each stay somehow.
// - Changing the background colour of each stay is one option

import { useState } from 'react'

import Head from 'next/head'

import SimpleLayout from '@/components/SimpleLayout'
import TimelineComponent from '@/components/TimelineComponent'

import { parsedTimelineData } from '@/lib/timelineData'

import clsx from 'clsx'

const digitalNomad = 'Digital nomad'
const backpackingTrip = 'Backpacking trip'
const startDate = 'Start date'
const endDate = 'End date'

const Timeline = () => {
  const [currentTimeline, setCurrentTimeline] = useState(digitalNomad)

  const timelineTypes = [digitalNomad, backpackingTrip]

  const timelineDates = {
    [digitalNomad]: {
      [startDate]: '2022-10-07',
      [endDate]: undefined,
    },
    [backpackingTrip]: {
      [startDate]: '2008-11-20',
      [endDate]: '2018-11-29',
    },
  }

  return (
    <>
      <Head>
        <title>Timeline</title>
        <meta name="description" content="My digital nomad itinerary." />
      </Head>
      <SimpleLayout
        title="Timeline"
        intro="Where being a digital nomad has taken me."
      >
        <div className="mb-3 flex flex-1 justify-center">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            {timelineTypes.map((type) => (
              <li key={`${type}-timeline`}>
                <div
                  onClick={(e) => setCurrentTimeline(e.target.textContent)}
                  className={clsx(
                    'relative block cursor-pointer px-3 py-2 transition',
                    currentTimeline === type
                      ? 'text-teal-500 dark:text-teal-400'
                      : 'hover:text-teal-500 dark:hover:text-teal-400'
                  )}
                >
                  {type}
                  {currentTimeline === type && (
                    <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <TimelineComponent
          timelineData={parsedTimelineData(
            timelineDates[currentTimeline][startDate],
            timelineDates[currentTimeline][endDate]
          )}
        />
      </SimpleLayout>
    </>
  )
}

export default Timeline
