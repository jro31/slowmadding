import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const taiwanData = {
  [places[countries.taiwan].taipei]: [
    {
      [dates]: {
        [arrival]: '2024-03-21',
        [departure]: '2024-04-18',
      },
    },
  ],
}
