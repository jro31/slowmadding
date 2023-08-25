import useNumberOfNights from '@/hooks/use-number-of-nights'

import { arrival, departure, country, place } from '@/lib/timelineData'
import { formatDateRange } from '@/lib/formatDate'

let stayOrderFirst = true

const TimelineComponent = ({ timelineData }) => {
  const numberOfNights = useNumberOfNights()

  return (
    <div className="relative flex flex-col gap-5">
      <div className="absolute inset-0 flex">
        <div className="shrink grow basis-1/2 border-r-2 border-zinc-800 dark:border-zinc-100"></div>
        <div className="shrink grow basis-1/2 border-l-2 border-zinc-800 dark:border-zinc-100"></div>
      </div>
      {timelineData.map((countryVisit, countryIterator) => {
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
                        numberOfNights(stay[arrival], stay[departure]) * 15,
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
      })}
    </div>
  )
}

export default TimelineComponent
