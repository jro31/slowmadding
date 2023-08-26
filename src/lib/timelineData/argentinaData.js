import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const argentinaData = {
  [places[countries.argentina].buenosAires]: [
    {
      [dates]: {
        [arrival]: '2010-07-04',
        [departure]: '2010-07-11',
      },
    },
  ],
  [places[countries.argentina].cafayate]: [
    {
      [dates]: {
        [arrival]: '2010-06-16',
        [departure]: '2010-06-20',
      },
    },
  ],
  [places[countries.argentina].cordoba]: [
    {
      [dates]: {
        [arrival]: '2010-06-25',
        [departure]: '2010-06-28',
      },
    },
  ],
  [places[countries.argentina].resistencia]: [
    {
      [dates]: {
        [arrival]: '2010-07-12',
        [departure]: '2010-07-14',
      },
    },
  ],
  [places[countries.argentina].rosario]: [
    {
      [dates]: {
        [arrival]: '2010-06-30',
        [departure]: '2010-07-04',
      },
    },
  ],
  [places[countries.argentina].salta]: [
    {
      [dates]: {
        [arrival]: '2010-06-13',
        [departure]: '2010-06-16',
      },
    },
  ],
  [places[countries.argentina].sanMiguelDeTucuman]: [
    {
      [dates]: {
        [arrival]: '2010-06-21',
        [departure]: '2010-06-24',
      },
    },
  ],
  [places[countries.argentina].tafiDelValle]: [
    {
      [dates]: {
        [arrival]: '2010-06-20',
        [departure]: '2010-06-21',
      },
    },
  ],
  [places[countries.argentina].villaCarlosPaz]: [
    {
      [dates]: {
        [arrival]: '2010-06-28',
        [departure]: '2010-06-29',
      },
    },
  ],
}
