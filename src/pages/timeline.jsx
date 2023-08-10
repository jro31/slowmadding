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
  console.log('🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈')
  console.log(parsedTimelineData())
  console.log('🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈')

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
        {parsedTimelineData().map((countryVisit, countryIterator) => {
          return (
            <div key={`country-${countryIterator}-section`}>
              <h1>{countryVisit[country]}</h1>
              {countryVisit.stays.map((stay, stayIterator) => {
                return (
                  <div
                    key={`country-${countryIterator}-place-${stayIterator}-section`}
                  >
                    <div>{stay[place]}</div>
                    <div>{stay[arrival]}</div>
                    <div>{stay[departure]}</div>
                  </div>
                )
              })}
            </div>
          )
        })}
      </SimpleLayout>
    </>
  )
}

export default Timeline
