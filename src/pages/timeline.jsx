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
import TimelineComponent from '@/components/TimelineComonent'

import { parsedTimelineData } from '@/lib/timelineData'

const digitalNomadStartDate = '2022-10-07'

const backpackingStartDate = '2008-11-20'
const backpackingEndDate = '2018-11-29'

const Timeline = () => {
  const [timelineStartDate, setTimelineStartDate] = useState(
    digitalNomadStartDate
  )
  const [timelineEndDate, setTimelineEndDate] = useState(undefined)

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
        <TimelineComponent
          timelineData={parsedTimelineData(timelineStartDate, timelineEndDate)}
        />
      </SimpleLayout>
    </>
  )
}

export default Timeline
