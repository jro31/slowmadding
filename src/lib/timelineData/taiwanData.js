import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const taiwanData = {
  [places[countries.taiwan].taipei]: [
    {
      [dates]: {
        [arrival]: '2024-03-21',
        [departure]: '2024-06-13',
      },
    },
    {
      [dates]: {
        [arrival]: '2025-08-07',
        [departure]: '2025-10-30',
      },
    },
  ],
}
