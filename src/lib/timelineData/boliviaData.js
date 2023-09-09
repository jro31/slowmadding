import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const boliviaData = {
  [places[countries.bolivia].cochabamba]: [
    {
      [dates]: {
        [arrival]: '2010-04-30',
        [departure]: '2010-05-03',
      },
    },
  ],
  [places[countries.bolivia].copacabana]: [
    {
      [dates]: {
        [arrival]: '2010-03-17',
        [departure]: '2010-03-20',
      },
    },
    {
      [dates]: {
        [arrival]: '2010-04-17',
        [departure]: '2010-04-21',
      },
    },
    {
      [dates]: {
        [arrival]: '2010-04-24',
        [departure]: '2010-04-25',
      },
    },
  ],
  [places[countries.bolivia].coroico]: [
    {
      [dates]: {
        [arrival]: '2010-03-30',
        [departure]: '2010-04-02',
      },
    },
  ],
  [places[countries.bolivia].islaDelSol]: [
    {
      [dates]: {
        [arrival]: '2010-04-21',
        [departure]: '2010-04-24',
      },
    },
  ],
  [places[countries.bolivia].laPaz]: [
    {
      [dates]: {
        [arrival]: '2010-03-20',
        [departure]: '2010-03-30',
      },
    },
    {
      [dates]: {
        [arrival]: '2010-04-02',
        [departure]: '2010-04-17',
      },
    },
    {
      [dates]: {
        [arrival]: '2010-04-25',
        [departure]: '2010-04-30',
      },
    },
  ],
  [places[countries.bolivia].samaipata]: [
    {
      [dates]: {
        [arrival]: '2010-05-04',
        [departure]: '2010-05-11',
      },
    },
  ],
  [places[countries.bolivia].santaCruz]: [
    {
      [dates]: {
        [arrival]: '2010-05-11',
        [departure]: '2010-05-14',
      },
    },
  ],
  [places[countries.bolivia].sucre]: [
    {
      [dates]: {
        [arrival]: '2010-05-15',
        [departure]: '2010-06-11',
      },
    },
  ],
  [places[countries.bolivia].tupiza]: [
    {
      [dates]: {
        [arrival]: '2010-06-12',
        [departure]: '2010-06-13',
      },
    },
  ],
}
