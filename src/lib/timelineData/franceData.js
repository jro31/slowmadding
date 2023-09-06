import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const franceData = {
  [places[countries.france].paris]: [
    {
      [dates]: {
        [arrival]: '2010-11-06',
        [departure]: '2010-11-12',
      },
    },
  ],
}
