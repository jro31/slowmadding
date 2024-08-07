import useNumberOfNights from '@/hooks/use-number-of-nights'

import {
  arrival,
  departure,
  country,
  place,
} from '@/lib/timelineData/variables'
import { formatDateRange, usersDate } from '@/lib/formatDate'

const adjustedDepartureDate = (departureDate) =>
  new Date(departureDate) > new Date(usersDate) ? usersDate : departureDate

const TimelineGraphic = ({ timelineData, ascending, compactMode }) => {
  let stayOrderFirst = true
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

  const orderedArray = (array) => (ascending ? [...array].reverse() : array)

  const removeFutureCountries = () =>
    (timelineData = timelineData.filter((countryVisit) =>
      countryVisit.stays.some(
        (stay) => new Date(stay[arrival]) < new Date(usersDate)
      )
    ))

  const removeFutureStays = () =>
    (timelineData = timelineData.map((countryVisit) => {
      return {
        ...countryVisit,
        stays: countryVisit.stays.filter(
          (stay) => new Date(stay[arrival]) < new Date(usersDate)
        ),
      }
    }))

  removeFutureCountries()
  removeFutureStays()

  return (
    <div className="relative flex flex-col gap-5">
      <div className="absolute inset-0 flex border-l-4 border-zinc-800 dark:border-zinc-100 lg:border-l-0">
        <div className="hidden shrink grow basis-1/2 border-r-2 border-inherit lg:block"></div>
        <div className="hidden shrink grow basis-1/2 border-l-2 border-inherit lg:block"></div>
      </div>
      {orderedArray(timelineData).map((countryVisit, countryIterator) => {
        return (
          <div
            key={`country-${countryIterator}-section`}
            className="z-10 bg-white dark:bg-zinc-900"
          >
            <h3
              className={`border-zinc-800 pl-5 text-xl font-bold tracking-tight text-zinc-800 dark:border-zinc-100 dark:text-zinc-100 sm:text-2xl lg:sticky lg:top-7 lg:z-50 lg:float-left lg:my-8 lg:w-0 lg:translate-x-10 lg:whitespace-nowrap lg:border-l-0 lg:pl-0${
                countryIterator === 0 ? ' border-l-0' : ' border-l-4'
              }`}
            >
              {countryVisit[country]}
            </h3>
            {orderedArray(countryVisit.stays).map((stay, stayIterator) => {
              stayOrderFirst =
                countryIterator === 0 && stayIterator === 0
                  ? true
                  : !stayOrderFirst

              return (
                <div
                  key={`country-${countryIterator}-place-${stayIterator}-section`}
                  className="flex"
                >
                  <div
                    className={`relative hidden shrink grow lg:block basis-1/2${
                      stayOrderFirst ? ' lg:order-last' : ''
                    } order-first`}
                  >
                    <div
                      className={`absolute right-0 border-r-2 dark:border-zinc-100 border-zinc-800${
                        stayOrderFirst
                          ? ' lg:left-0 lg:right-auto lg:border-l-2 lg:border-r-0'
                          : ''
                      } ${lineClasses(
                        countryIterator,
                        stayIterator,
                        countryVisit.stays
                      )}`}
                    />
                  </div>
                  <div
                    style={
                      compactMode
                        ? { minHeight: '106px' }
                        : {
                            minHeight: `${Math.min(
                              Math.max(
                                numberOfNights(
                                  stay[arrival],
                                  adjustedDepartureDate(stay[departure])
                                ) * 15,
                                106
                              ),
                              1050
                            )}px`,
                          }
                    }
                    className={`relative flex max-h-[1050px] shrink grow basis-1/2 items-center justify-start py-1 pr-2 transition-[min-height] duration-700 lg:py-1.5${
                      stayOrderFirst ? ' lg:justify-end lg:pl-2 lg:pr-0' : ''
                    }${stayIterator === 0 ? ' pt-2 lg:pt-3' : ''}${
                      stayIterator === countryVisit.stays.length - 1
                        ? ' pb-2 lg:pb-3'
                        : ''
                    }`}
                  >
                    <div
                      className={`absolute left-0 border-l-4 dark:border-zinc-100 border-zinc-800${
                        stayOrderFirst
                          ? ' lg:left-auto lg:right-0 lg:border-l-0 lg:border-r-2'
                          : ' lg:border-l-2'
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
                          : ' lg:-translate-x-2.5'
                      } order-first shrink-0 grow-0 -translate-x-2 rounded-full bg-zinc-800 dark:bg-zinc-100`}
                    />
                    <div
                      className={`relative flex h-full flex-col justify-center rounded-3xl bg-zinc-50 p-5 text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10 dark:text-zinc-100${
                        stayOrderFirst ? ' lg:text-right' : ''
                      }`}
                    >
                      <div className="font-bold">{stay[place]}</div>
                      <div>
                        {formatDateRange(
                          stay[arrival],
                          adjustedDepartureDate(stay[departure])
                        )}
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

export default TimelineGraphic
