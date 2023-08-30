import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const indonesiaData = {
  [places[countries.indonesia].bali]: [
    {
      [dates]: {
        [arrival]: '2018-09-29',
        [departure]: '2018-11-27',
      },
    },
  ],
}
