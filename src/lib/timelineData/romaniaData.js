import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const romaniaData = {
  [places[countries.romania].bucharest]: [
    {
      [dates]: {
        [arrival]: '2023-06-14',
        [departure]: '2023-07-13',
      },
    },
  ],
}
