import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const netherlandsData = {
  [places[countries.netherlands].amsterdam]: [
    {
      [dates]: {
        [arrival]: '2010-11-01',
        [departure]: '2010-11-05',
      },
    },
  ],
}
