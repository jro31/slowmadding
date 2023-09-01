// TODO: Add a table that details the number of days in each country
// TODO: Add in a separate 'backpacking' timeline that details 2008 - 2018
// TODO: Jazz-up the bullets - They could potentially be:
// - Numbers, starting from 1 at the bottom of the timeline that details how many stays I've had
// - Little flags of the country in question
// - A mix of both, where if I've only been to a place once, then it's a flag, but if I've been multiple times then it's a number corresponding to which stay it is
// TODO: Add images to some or all stays?
// - These should be on the opposite side of the timeline, and be a photo I took in that place. Join these to the bullet with a line.
// TODO: Add Google Map links to some or all stays?
// TODO: Add description to some or all stays?
// TODO: Make clearer the length of each stay
// - Currently a short stay looks much longer than it is if it's surrounded by longer stays. Make it more obvious how long a stay is by highlighting each stay somehow.
// - Changing the background colour of each stay is one option
// FIXME: The top timeline element bullet should not have a vertical line coming out the top, and the bottom bullet should not have a line coming out the bottom
// TODO: Add the accommodation type somehow - feasibly using a logo in the bullet, such as a camping logo or an Airbnb logo
// TODO: There should be more empty space between stays (and countries) if there's a blank day or two between them
// TODO: Give each 'stay' element a max-height; perhaps 120vh (currently long stays take multiple times the height of the viewport and looks/feels a bit ridiculous)

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

const introText = {
  [digitalNomad]: 'Where being a digital nomad has taken me.',
  [backpackingTrip]: 'My post-graduation backpacking trip.',
}

const Timeline = ({ timelines }) => {
  const [currentTimeline, setCurrentTimeline] = useState(digitalNomad)

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
        {/* TODO: Is it possible to merge code duplicated in the desktop navbar without overcomplicating? */}
        <div className="mb-3 flex flex-1 justify-center">
          <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
            {Object.keys(timelines).map((timelineName) => (
              <li key={`${timelineName}-timeline`}>
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
        <TimelineComponent
          timelineData={timelines[currentTimeline].timelineData}
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
