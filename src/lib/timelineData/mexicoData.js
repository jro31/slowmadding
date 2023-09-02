import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const mexicoData = {
  [places[countries.mexico].acapulco]: [
    {
      [dates]: {
        [arrival]: '2008-06-30',
        [departure]: '2008-07-03',
      },
    },
  ],
  [places[countries.mexico].cancun]: [
    {
      [dates]: {
        [arrival]: '2008-07-11',
        [departure]: '2008-07-13',
      },
    },
  ],
  [places[countries.mexico].chiapasJungle]: [
    {
      [dates]: {
        [arrival]: '2008-07-06',
        [departure]: '2008-07-08',
      },
    },
  ],
  [places[countries.mexico].mexicoCity]: [
    {
      [dates]: {
        [arrival]: '2008-06-28',
        [departure]: '2008-06-30',
      },
    },
    {
      [dates]: {
        [arrival]: '2008-07-17',
        [departure]: '2008-07-19',
      },
    },
  ],
  [places[countries.mexico].playaDelCarmen]: [
    {
      [dates]: {
        [arrival]: '2008-07-13',
        [departure]: '2008-07-17',
      },
    },
  ],
  [places[countries.mexico].puertoEscondido]: [
    {
      [dates]: {
        [arrival]: '2008-07-04',
        [departure]: '2008-07-05',
      },
    },
  ],
  [places[countries.mexico].sanCristobalDeLasCasas]: [
    {
      [dates]: {
        [arrival]: '2008-07-08',
        [departure]: '2008-07-10',
      },
    },
  ],
}
