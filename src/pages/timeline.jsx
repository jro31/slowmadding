import Head from 'next/head'

import SimpleLayout from '@/components/SimpleLayout'

import {
  parsedTimelineData,
  arrival,
  departure,
  country,
  place,
} from '@/lib/timelineData'

const Timeline = () => {
  return (
    <>
      <Head>
        <title>Timeline</title>
        <meta name="description" content="My digital nomad itinerary." />
      </Head>
      <SimpleLayout
        title="Where and when"
        // intro=""
      >
        {parsedTimelineData().map((stay) => (
          <div key={`${stay[arrival]}-${stay[departure]}`}>
            <div>{stay[country]}</div>
            <div>{stay[place]}</div>
            <div>{stay[arrival]}</div>
            <div>{stay[departure]}</div>
          </div>
        ))}
      </SimpleLayout>
    </>
  )
}

export default Timeline
