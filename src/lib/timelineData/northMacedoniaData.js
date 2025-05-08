import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const northMacedoniaData = {
  [places[countries.northMacedonia].skopje]: [
    {
      [dates]: {
        [arrival]: '2025-05-23',
        [departure]: '2025-06-26',
      },
    },
  ],
}
