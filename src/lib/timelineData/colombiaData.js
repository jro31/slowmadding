import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from './variables'

export const colombiaData = {
  [places[countries.colombia].bogota]: [
    {
      [dates]: {
        [arrival]: '2009-12-29',
        [departure]: '2010-01-04',
      },
    },
  ],
  [places[countries.colombia].cali]: [
    {
      [dates]: {
        [arrival]: '2010-01-22',
        [departure]: '2010-01-25',
      },
    },
  ],
  [places[countries.colombia].cartagena]: [
    {
      [dates]: {
        [arrival]: '2010-01-15',
        [departure]: '2010-01-18',
      },
    },
  ],
  [places[countries.colombia].medellin]: [
    {
      [dates]: {
        [arrival]: '2010-01-19',
        [departure]: '2010-01-22',
      },
    },
  ],
  [places[countries.colombia].pasto]: [
    {
      [dates]: {
        [arrival]: '2010-01-29',
        [departure]: '2010-01-30',
      },
    },
  ],
  [places[countries.colombia].popayan]: [
    {
      [dates]: {
        [arrival]: '2010-01-25',
        [departure]: '2010-01-26',
      },
    },
  ],
  [places[countries.colombia].sanAgustin]: [
    {
      [dates]: {
        [arrival]: '2010-01-26',
        [departure]: '2010-01-29',
      },
    },
  ],
  [places[countries.colombia].taganga]: [
    {
      [dates]: {
        [arrival]: '2010-01-05',
        [departure]: '2010-01-10',
      },
    },
    {
      [dates]: {
        [arrival]: '2010-01-12',
        [departure]: '2010-01-15',
      },
    },
  ],
  [places[countries.colombia].tayronaNationalPark]: [
    {
      [dates]: {
        [arrival]: '2010-01-10',
        [departure]: '2010-01-12',
      },
    },
  ],
}
