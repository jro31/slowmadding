import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const cambodiaData = {
  [places[countries.cambodia].phnomPenh]: [
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
        [arrival]: '2023-02-11',
        [departure]: '2023-03-11',
      },
    },
  ],
}
