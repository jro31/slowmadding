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

import Head from 'next/head'

import SimpleLayout from '@/components/SimpleLayout'
import useNumberOfNights from '@/hooks/use-number-of-nights'

import {
  parsedTimelineData,
  arrival,
  departure,
  country,
  place,
} from '@/lib/timelineData'
import { formatDateRange } from '@/lib/formatDate'

const timelineStartDate = '2022-10-07'

const Timeline = () => {
  const numberOfNights = useNumberOfNights()
  let stayOrderFirst = true

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
        <div className="relative flex flex-col gap-5">
          <div className="absolute inset-0 flex">
            <div className="shrink grow basis-1/2 border-r-2 border-zinc-800 dark:border-zinc-100"></div>
            <div className="shrink grow basis-1/2 border-l-2 border-zinc-800 dark:border-zinc-100"></div>
          </div>
          {parsedTimelineData(timelineStartDate).map(
            (countryVisit, countryIterator) => {
              return (
                <div
                  key={`country-${countryIterator}-section`}
                  className="z-10 rounded-3xl bg-zinc-50 dark:bg-zinc-800"
                >
                  <h1 className="sticky top-7 float-left my-8 w-0 translate-x-10 text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:whitespace-nowrap sm:text-2xl">
                    {countryVisit[country]}
                  </h1>
                  {countryVisit.stays.map((stay, stayIterator) => {
                    stayOrderFirst = !stayOrderFirst

                    return (
                      <div
                        key={`country-${countryIterator}-place-${stayIterator}-section`}
                        className="flex"
                      >
                        <div
                          className={`shrink grow basis-1/2 ${
                            stayOrderFirst &&
                            'lg:order-last lg:border-l-2 lg:border-r-0'
                          } order-first border-r-2 border-zinc-800 dark:border-zinc-100`}
                        ></div>
                        <div
                          style={{
                            minHeight: `${Math.max(
                              numberOfNights(stay[arrival], stay[departure]) *
                                15,
                              96
                            )}px`,
                          }}
                          className={`flex shrink grow basis-1/2 items-center justify-start border-l-2 border-zinc-800 pr-2 dark:border-zinc-100 ${
                            stayOrderFirst &&
                            'lg:justify-end lg:border-r-2 lg:border-l-0 lg:pl-2 lg:pr-0'
                          }`}
                        >
                          <div
                            className={`h-5 w-5 ${
                              stayOrderFirst && 'lg:order-last lg:translate-x-3'
                            } order-first shrink-0 grow-0 -translate-x-3 rounded-full bg-zinc-800 dark:bg-zinc-100`}
                          ></div>
                          <div
                            className={`flex flex-col text-zinc-800 dark:text-zinc-100 ${
                              stayOrderFirst && 'lg:text-right'
                            }`}
                          >
                            <div className="font-bold">{stay[place]}</div>
                            <div>
                              {formatDateRange(stay[arrival], stay[departure])}
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            }
          )}
        </div>
      </SimpleLayout>
    </>
  )
}

export default Timeline
