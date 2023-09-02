import useNumberOfNights from '@/hooks/use-number-of-nights'

import {
  arrival,
  departure,
  country,
  place,
} from '@/lib/timelineData/variables'
import { formatDateRange } from '@/lib/formatDate'

let stayOrderFirst = true

const TimelineComponent = ({ timelineData }) => {
  const numberOfNights = useNumberOfNights()

  const lineClasses = (countryIterator, stayIterator, stays) => {
    if (countryIterator === 0 && stayIterator === 0) {
      return 'top-1/2 h-1/2'
    } else if (
      countryIterator === Object.keys(timelineData).length - 1 &&
      stayIterator === stays.length - 1
    ) {
      return 'bottom-1/2 h-1/2'
    } else {
      return 'top-0 h-full'
    }
  }

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
            className="z-10 rounded-3xl bg-white dark:bg-zinc-900"
          >
            <h1 className="sticky top-7 z-50 float-left my-8 w-0 translate-x-10 text-xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:whitespace-nowrap sm:text-2xl">
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
                    className={`relative shrink grow basis-1/2${
                      stayOrderFirst ? ' lg:order-last' : ''
                    } order-first`}
                  >
                    <div
                      className={`absolute right-0 border-r-2 dark:border-zinc-100 border-zinc-800${
                        stayOrderFirst
                          ? ' lg:left-0 lg:right-auto lg:border-r-0 lg:border-l-2'
                          : ''
                      } ${lineClasses(
                        countryIterator,
                        stayIterator,
                        countryVisit.stays
                      )}`}
                    />
                  </div>
                  <div
                    style={{
                      minHeight: `${Math.max(
                        numberOfNights(stay[arrival], stay[departure]) * 15,
                        96
                      )}px`,
                    }}
                    className={`relative flex shrink grow basis-1/2 items-center justify-start py-1 pr-2 lg:py-1.5 ${
                      stayOrderFirst ? ' lg:justify-end lg:pl-2 lg:pr-0' : ''
                    }${stayIterator === 0 ? ' pt-2 lg:pt-3' : ''}${
                      stayIterator === countryVisit.stays.length - 1
                        ? ' pb-2 lg:pb-3'
                        : ''
                    }`}
                  >
                    <div
                      className={`absolute left-0 border-l-2 dark:border-zinc-100 border-zinc-800${
                        stayOrderFirst
                          ? ' lg:right-0 lg:left-auto lg:border-l-0 lg:border-r-2'
                          : ''
                      } ${lineClasses(
                        countryIterator,
                        stayIterator,
                        countryVisit.stays
                      )}`}
                    />
                    <div
                      className={`h-5 w-5${
                        stayOrderFirst
                          ? ' lg:order-last lg:translate-x-2.5'
                          : ''
                      } order-first shrink-0 grow-0 -translate-x-2.5 rounded-full bg-zinc-800 dark:bg-zinc-100`}
                    />
                    <div
                      className={`relative flex h-full flex-col justify-center rounded-3xl bg-zinc-50 p-5 text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10 dark:text-zinc-100${
                        stayOrderFirst ? ' lg:text-right' : ''
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
