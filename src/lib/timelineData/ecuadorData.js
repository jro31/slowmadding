import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const ecuadorData = {
  [places[countries.ecuador].banos]: [
    {
      [dates]: {
        [arrival]: '2010-02-02',
        [departure]: '2010-02-06',
      },
    },
  ],
  [places[countries.ecuador].montanita]: [
    {
      [dates]: {
        [arrival]: '2010-02-07',
        [departure]: '2010-02-11',
      },
    },
  ],
  [places[countries.ecuador].quito]: [
    {
      [dates]: {
        [arrival]: '2010-01-30',
        [departure]: '2010-02-02',
      },
    },
  ],
  [places[countries.ecuador].riobamba]: [
    {
      [dates]: {
        [arrival]: '2010-02-06',
        [departure]: '2010-02-07',
      },
    },
  ],
}
