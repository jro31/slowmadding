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

const colorClass = [
  'bg-orange-500',
  'bg-lime-400',
  'bg-teal-400',
  'bg-blue-500',
  'bg-fuchsia-600',
  'bg-rose-600',
  'bg-sky-500',
]

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
                  className={`${colorClass[countryIterator]} z-10 rounded-[5rem]`}
                >
                  <h1 className="sticky top-7 float-left my-8 w-0 translate-x-12 whitespace-nowrap text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-2xl">
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
                            stayOrderFirst ? 'order-last' : 'order-first'
                          } ${
                            stayOrderFirst ? 'border-l-2' : 'border-r-2'
                          } border-zinc-800 dark:border-zinc-100`}
                        ></div>
                        <div
                          style={{
                            minHeight: `${
                              numberOfNights(stay[arrival], stay[departure]) *
                              10
                            }px`,
                          }}
                          className={`${
                            stayOrderFirst ? 'border-r-2' : 'border-l-2'
                          } flex shrink grow basis-1/2 items-center border-zinc-800 dark:border-zinc-100 ${
                            stayOrderFirst ? 'justify-end' : 'justify-start'
                          }`}
                        >
                          <div
                            className={`h-5 w-5 ${
                              stayOrderFirst
                                ? 'translate-x-3'
                                : '-translate-x-3'
                            } rounded-full bg-zinc-800 dark:bg-zinc-100 ${
                              stayOrderFirst ? 'order-last' : 'order-first'
                            }`}
                          ></div>
                          <div className="text-zinc-800 dark:text-zinc-100">
                            <div>{stay[place]}</div>
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
