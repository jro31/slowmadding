import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const singaporeData = {
  [places[countries.singapore].singapore]: [
    {
      [dates]: {
        [arrival]: '2018-11-27',
        [departure]: '2018-11-29',
      },
    },
  ],
}
