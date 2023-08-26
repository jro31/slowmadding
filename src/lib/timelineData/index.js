import { countries } from '@/lib/placeNames'

import { dates, arrival, departure, country, place } from './variables'

import { argentinaData } from './argentinaData'
import { boliviaData } from './boliviaData'
import { bulgariaData } from './bulgariaData'
import { cambodiaData } from './cambodiaData'
import { canadaData } from './canadaData'
import { colombiaData } from './colombiaData'
import { ecuadorData } from './ecuadorData'
import { franceData } from './franceData'
import { greeceData } from './greeceData'
import { netherlandsData } from './netherlandsData'
import { paraguayData } from './paraguayData'
import { peruData } from './peruData'
import { romaniaData } from './romaniaData'
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
  [countries.colombia]: colombiaData,
  [countries.ecuador]: ecuadorData,
  [countries.france]: franceData,
  [countries.greece]: greeceData,
  [countries.netherlands]: netherlandsData,
  [countries.paraguay]: paraguayData,
  [countries.peru]: peruData,
  [countries.romania]: romaniaData,
  [countries.thailand]: thailandData,
  [countries.unitedKingdom]: unitedKingdomData,
  [countries.usa]: usaData,
  [countries.vietnam]: vietnamData,
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
