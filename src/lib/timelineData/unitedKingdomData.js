import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const unitedKingdomData = {
  [places[countries.unitedKingdom].london]: [
    {
      [dates]: {
        [arrival]: '2010-07-21',
        [departure]: '2010-11-01',
      },
    },
    {
      [dates]: {
        [arrival]: '2010-11-12',
        [departure]: '2010-11-19',
      },
    },
    {
      [dates]: {
        [arrival]: '2023-05-24',
        [departure]: '2023-06-14',
      },
    },
  ],
}
