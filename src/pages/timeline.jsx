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

const colorClass = [
  'bg-orange-500',
  'bg-lime-400',
  'bg-teal-400',
  'bg-blue-500',
  'bg-fuchsia-600',
  'bg-rose-600',
  'bg-sky-500',
]

// min-h-[10px] min-h-[20px] min-h-[30px] min-h-[40px] min-h-[50px] min-h-[60px] min-h-[70px]
// min-h-[80px] min-h-[90px] min-h-[100px] min-h-[120px] min-h-[130px] min-h-[140px] min-h-[150px]
// min-h-[160px] min-h-[170px] min-h-[180px] min-h-[190px] min-h-[200px] min-h-[210px] min-h-[220px]
// min-h-[230px] min-h-[240px] min-h-[250px] min-h-[260px] min-h-[270px] min-h-[280px] min-h-[290px]
// min-h-[300px] min-h-[310px] min-h-[320px] min-h-[330px] min-h-[340px] min-h-[350px] min-h-[360px]
// min-h-[370px] min-h-[380px] min-h-[390px] min-h-[400px] min-h-[410px] min-h-[420px] min-h-[430px]

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
                          className={`${
                            stayOrderFirst ? 'border-r-2' : 'border-l-2'
                          } min-h-[${
                            numberOfNights(stay[arrival], stay[departure]) * 10
                          }px] flex shrink grow basis-1/2 items-center border-zinc-800 dark:border-zinc-100 ${
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
                            <div>{stay[arrival]}</div>
                            <div>{stay[departure]}</div>
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
