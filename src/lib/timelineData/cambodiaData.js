import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const cambodiaData = {
  [places[countries.cambodia].banLung]: [
    {
      [dates]: {
        [arrival]: '2012-03-21',
        [departure]: '2012-03-23',
      },
    },
  ],
  [places[countries.cambodia].battambang]: [
    {
      [dates]: {
        [arrival]: '2012-03-15',
        [departure]: '2012-03-17',
      },
    },
  ],
  [places[countries.cambodia].kampot]: [
    {
      [dates]: {
        [arrival]: '2012-03-06',
        [departure]: '2012-03-08',
      },
    },
  ],
  [places[countries.cambodia].kep]: [
    {
      [dates]: {
        [arrival]: '2012-03-04',
        [departure]: '2012-03-06',
      },
    },
  ],
  [places[countries.cambodia].phnomPenh]: [
    {
      [dates]: {
        [arrival]: '2012-02-29',
        [departure]: '2012-03-04',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-03-11',
        [departure]: '2012-03-14',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-03-23',
        [departure]: '2012-03-29',
      },
    },
    {
      [dates]: {
        [arrival]: '2013-03-04',
        [departure]: '2013-03-09',
      },
    },
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
        [arrival]: '2012-03-18',
        [departure]: '2012-03-21',
      },
    },
    {
      [dates]: {
        [arrival]: '2023-02-11',
        [departure]: '2023-03-11',
      },
    },
  ],
  [places[countries.cambodia].sihanoukville]: [
    {
      [dates]: {
        [arrival]: '2012-03-08',
        [departure]: '2012-03-11',
      },
    },
  ],
  [places[countries.cambodia].sisophon]: [
    {
      [dates]: {
        [arrival]: '2012-03-17',
        [departure]: '2012-03-18',
      },
    },
  ],
}
