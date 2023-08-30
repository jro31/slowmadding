import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const bulgariaData = {
  [places[countries.bulgaria].sofia]: [
    {
      [dates]: {
        [arrival]: '2023-07-13',
        [departure]: '2023-08-10',
      },
    },
  ],
}
