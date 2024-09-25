import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const greeceData = {
  [places[countries.greece].athens]: [
    {
      [dates]: {
        [arrival]: '2023-08-10',
        [departure]: '2023-10-26',
      },
    },
    {
      [dates]: {
        [arrival]: '2024-08-15',
        [departure]: '2024-10-31',
      },
    },
  ],
}
