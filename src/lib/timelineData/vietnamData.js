import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from './variables'

export const vietnamData = {
  [places[countries.vietnam].hoChiMinhCity]: [
    {
      [dates]: {
        [arrival]: '2023-01-13',
        [departure]: '2023-02-10',
      },
    },
  ],
}
