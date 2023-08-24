// TODO: Add a table that details the number of days in each country?

// FIXME: Fix timeline display for short-stays in a country (1 day)
// TODO: What if the arrival date of the current stay is the same as the end date of the timeline (today)

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

  console.log('🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈🌈')
  console.log(parsedTimelineData(timelineStartDate))
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
                  <h1 className="sticky top-7 float-left my-8 w-0 translate-x-10 whitespace-nowrap text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
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
                            stayOrderFirst
                              ? 'order-last border-l-2'
                              : 'order-first border-r-2'
                          } border-zinc-800 dark:border-zinc-100`}
                        ></div>
                        <div
                          style={{
                            minHeight: `${
                              numberOfNights(stay[arrival], stay[departure]) *
                              15
                            }px`,
                          }}
                          className={`flex shrink grow basis-1/2 items-center border-zinc-800 dark:border-zinc-100 ${
                            stayOrderFirst
                              ? 'justify-end border-r-2 pl-2'
                              : 'justify-start border-l-2 pr-2'
                          }`}
                        >
                          <div
                            className={`h-5 w-5 ${
                              stayOrderFirst
                                ? 'order-last translate-x-3'
                                : 'order-first -translate-x-3'
                            } shrink-0 grow-0 rounded-full bg-zinc-800 dark:bg-zinc-100`}
                          ></div>
                          <div
                            className={`flex flex-col text-zinc-800 dark:text-zinc-100 ${
                              stayOrderFirst && 'text-right'
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
