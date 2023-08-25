import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const unitedKingdomData = {
  [places[countries.unitedKingdom].london]: [
    {
      [dates]: {
        [arrival]: '2023-05-24',
        [departure]: '2023-06-14',
      },
    },
  ],
}
