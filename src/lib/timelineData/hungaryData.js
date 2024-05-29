import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const hungaryData = {
  [places[countries.hungary].budapest]: [
    {
      [dates]: {
        [arrival]: '2024-07-06',
        [departure]: '2024-08-15',
      },
    },
  ],
}
