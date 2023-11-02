import { countries } from '@/lib/placeNames'

import { dates, arrival, departure, country, place } from './variables'
import { usersDate } from '../formatDate'

import { argentinaData } from './argentinaData'
import { boliviaData } from './boliviaData'
import { bulgariaData } from './bulgariaData'
import { cambodiaData } from './cambodiaData'
import { canadaData } from './canadaData'
import { chinaData } from './chinaData'
import { colombiaData } from './colombiaData'
import { ecuadorData } from './ecuadorData'
import { franceData } from './franceData'
import { greeceData } from './greeceData'
import { indonesiaData } from './indonesiaData'
import { laosData } from './laosData'
import { mexicoData } from './mexicoData'
import { netherlandsData } from './netherlandsData'
import { paraguayData } from './paraguayData'
import { peruData } from './peruData'
import { romaniaData } from './romaniaData'
import { singaporeData } from './singaporeData'
import { thailandData } from './thailandData'
import { unitedKingdomData } from './unitedKingdomData'
import { usaData } from './usaData'
import { vietnamData } from './vietnamData'

const timelineData = {
  [countries.argentina]: argentinaData,
  [countries.bolivia]: boliviaData,
  [countries.bulgaria]: bulgariaData,
  [countries.cambodia]: cambodiaData,
  [countries.canada]: canadaData,
  [countries.china]: chinaData,
  [countries.colombia]: colombiaData,
  [countries.ecuador]: ecuadorData,
  [countries.france]: franceData,
  [countries.greece]: greeceData,
  [countries.indonesia]: indonesiaData,
  [countries.laos]: laosData,
  [countries.mexico]: mexicoData,
  [countries.netherlands]: netherlandsData,
  [countries.paraguay]: paraguayData,
  [countries.peru]: peruData,
  [countries.romania]: romaniaData,
  [countries.singapore]: singaporeData,
  [countries.thailand]: thailandData,
  [countries.unitedKingdom]: unitedKingdomData,
  [countries.usa]: usaData,
  [countries.vietnam]: vietnamData,
}

let endDateIsSet = true

const orderedTimelineArray = (startDate, endDate) => {
  let returnArray = []

  const stayIsInDateRange = (stay) =>
    new Date(stay[dates][departure]) >= new Date(startDate) &&
    new Date(stay[dates][arrival]) < new Date(endDate)

  const stayIsFuture = (stay) =>
    new Date(stay[dates][arrival]) >= new Date(usersDate)

  const checkDateValidity = (stay, country, place) => {
    if (new Date(stay[dates][departure]) <= new Date(stay[dates][arrival]))
      throw new Error(
        `Timeline ${place} ${country} stay arrival date of ${stay[dates][arrival]}
        is not before departure date of ${stay[dates][departure]}`
      )
  }

  Object.keys(timelineData).map((countryKey) => {
    Object.keys(timelineData[countryKey]).map((placeKey) => {
      timelineData[countryKey][placeKey].map((stay) => {
        checkDateValidity(stay, countryKey, placeKey)
        if (stayIsInDateRange(stay) || (!endDateIsSet && stayIsFuture(stay))) {
          returnArray.push({
            [country]: countryKey,
            [place]: placeKey,
            [arrival]:
              new Date(startDate) > new Date(stay[dates][arrival])
                ? startDate
                : stay[dates][arrival],
            [departure]: stay[dates][departure],
          })
        }
      })
    })
  })

  returnArray.sort((a, b) => new Date(b[arrival]) - new Date(a[arrival]))

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

export const parsedTimelineData = (startDate, endDate) => {
  if (endDate) {
    endDateIsSet = true
  } else {
    endDateIsSet = false
    endDate = usersDate
  }

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
