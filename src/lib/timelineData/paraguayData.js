import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from './variables'

export const paraguayData = {
  [places[countries.paraguay].asuncion]: [
    {
      [dates]: {
        [arrival]: '2010-07-15',
        [departure]: '2010-07-20',
      },
    },
  ],
}
