import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from './variables'

export const peruData = {
  [places[countries.peru].arequipa]: [
    {
      [dates]: {
        [arrival]: '2010-03-10',
        [departure]: '2010-03-15',
      },
    },
  ],
  [places[countries.peru].chiclayo]: [
    {
      [dates]: {
        [arrival]: '2010-02-13',
        [departure]: '2010-02-15',
      },
    },
  ],
  [places[countries.peru].huacachina]: [
    {
      [dates]: {
        [arrival]: '2010-03-07',
        [departure]: '2010-03-09',
      },
    },
  ],
  [places[countries.peru].huanchaco]: [
    {
      [dates]: {
        [arrival]: '2010-02-15',
        [departure]: '2010-02-26',
      },
    },
  ],
  [places[countries.peru].huaraz]: [
    {
      [dates]: {
        [arrival]: '2010-02-27',
        [departure]: '2010-03-02',
      },
    },
  ],
  [places[countries.peru].lima]: [
    {
      [dates]: {
        [arrival]: '2010-03-03',
        [departure]: '2010-03-07',
      },
    },
  ],
  [places[countries.peru].mancora]: [
    {
      [dates]: {
        [arrival]: '2010-02-11',
        [departure]: '2010-02-13',
      },
    },
  ],
  [places[countries.peru].puno]: [
    {
      [dates]: {
        [arrival]: '2010-03-15',
        [departure]: '2010-03-17',
      },
    },
  ],
}
