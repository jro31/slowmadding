import { countries, places } from './placeNames'

const dates = 'dates'
export const arrival = 'arrival'
export const departure = 'departure'
export const country = 'country'
export const place = 'place'

const timelineData = {
  [countries.bulgaria]: {
    [places[countries.bulgaria].sofia]: [
      {
        [dates]: {
          [arrival]: '2023-07-13',
          [departure]: '2023-08-10',
        },
      },
    ],
  },
  [countries.cambodia]: {
    [places[countries.cambodia].phnomPenh]: [
      {
        [dates]: {
          [arrival]: '2022-12-16',
          [departure]: '2023-01-13',
        },
      },
      {
        [dates]: {
          [arrival]: '2023-02-10',
          [departure]: '2023-02-11',
        },
      },
    ],
    [places[countries.cambodia].siemReap]: [
      {
        [dates]: {
          [arrival]: '2023-02-11',
          [departure]: '2023-03-11',
        },
      },
    ],
  },
  [countries.greece]: {
    [places[countries.greece].athens]: [
      {
        [dates]: {
          [arrival]: '2023-08-10',
          [departure]: '2023-10-26',
        },
      },
    ],
  },
  [countries.romania]: {
    [places[countries.romania].bucharest]: [
      {
        [dates]: {
          [arrival]: '2023-06-14',
          [departure]: '2023-07-13',
        },
      },
    ],
  },
  [countries.thailand]: {
    [places[countries.thailand].bangkok]: [
      {
        [dates]: {
          [arrival]: '2022-10-07',
          [departure]: '2022-11-03',
        },
      },
      {
        [dates]: {
          [arrival]: '2022-12-01',
          [departure]: '2022-12-16',
        },
      },
      {
        [dates]: {
          [arrival]: '2023-03-11',
          [departure]: '2023-03-23',
        },
      },
      {
        [dates]: {
          [arrival]: '2023-04-06',
          [departure]: '2023-04-20',
        },
      },
      {
        [dates]: {
          [arrival]: '2023-05-11',
          [departure]: '2023-05-24',
        },
      },
    ],
    [places[countries.thailand].chiangMai]: [
      {
        [dates]: {
          [arrival]: '2022-11-03',
          [departure]: '2022-11-17',
        },
      },
    ],
    [places[countries.thailand].chiangRai]: [
      {
        [dates]: {
          [arrival]: '2022-11-17',
          [departure]: '2022-12-01',
        },
      },
    ],
    [places[countries.thailand].huahin]: [
      {
        [dates]: {
          [arrival]: '2023-03-23',
          [departure]: '2023-04-06',
        },
      },
    ],
    [places[countries.thailand].loei]: [
      {
        [dates]: {
          [arrival]: '2023-05-04',
          [departure]: '2023-05-11',
        },
      },
    ],
    [places[countries.thailand].udonThani]: [
      {
        [dates]: {
          [arrival]: '2023-04-20',
          [departure]: '2023-05-04',
        },
      },
    ],
  },
  [countries.unitedKingdom]: {
    [places[countries.unitedKingdom].london]: [
      {
        [dates]: {
          [arrival]: '2023-05-24',
          [departure]: '2023-06-14',
        },
      },
    ],
  },
  [countries.vietnam]: {
    [places[countries.vietnam].hoChiMinhCity]: [
      {
        [dates]: {
          [arrival]: '2023-01-13',
          [departure]: '2023-02-10',
        },
      },
    ],
  },
}

const orderedTimelineArray = (startDate, endDate) => {
  let returnArray = []

  Object.keys(timelineData).map((countryKey) => {
    Object.keys(timelineData[countryKey]).map((placeKey) => {
      timelineData[countryKey][placeKey].map((stay) => {
        if (
          Date.parse(stay[dates][departure]) >= Date.parse(startDate) &&
          Date.parse(stay[dates][arrival]) < Date.parse(endDate)
        ) {
          returnArray.push({
            [country]: countryKey,
            [place]: placeKey,
            [arrival]:
              Date.parse(startDate) > Date.parse(stay[dates][arrival])
                ? startDate
                : stay[dates][arrival],
            [departure]:
              Date.parse(endDate) < Date.parse(stay[dates][departure])
                ? endDate
                : stay[dates][departure],
          })
        }
      })
    })
  })

  returnArray.sort((a, b) => Date.parse(b[arrival]) - Date.parse(a[arrival]))

  checkDateOverlap(returnArray)

  return returnArray
}

const checkDateOverlap = (staysArray) => {
  staysArray.map((stayObject, iterator) => {
    if (
      iterator >= 1 &&
      stayObject[departure] > staysArray[iterator - 1][arrival]
    ) {
      throw new Error(
        `Timeline ${stayObject[place]} departure date of ${
          stayObject[departure]
        } overlaps with ${staysArray[iterator - 1][place]} arrival date of ${
          staysArray[iterator - 1][arrival]
        } `
      )
    }
  })
}

const stayObject = (stay) => ({
  arrival: stay.arrival,
  departure: stay.departure,
  place: stay.place,
})

export const parsedTimelineData = (
  startDate,
  endDate = new Date().toJSON().slice(0, 10)
) => {
  let returnArray = []
  orderedTimelineArray(startDate, endDate).map((stay, iterator) => {
    if (
      iterator >= 1 &&
      stay.country ===
        orderedTimelineArray(startDate, endDate)[iterator - 1][country]
    ) {
      returnArray.slice(-1)[0].stays.push(stayObject(stay))
    } else {
      returnArray.push({
        country: stay.country,
        stays: [stayObject(stay)],
      })
    }
  })

  return returnArray
}
