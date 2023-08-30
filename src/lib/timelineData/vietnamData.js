import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from './variables'

export const vietnamData = {
  [places[countries.vietnam].dongHoi]: [
    {
      [dates]: {
        [arrival]: '2012-02-11',
        [departure]: '2012-02-14',
      },
    },
  ],
  [places[countries.vietnam].hanoi]: [
    {
      [dates]: {
        [arrival]: '2012-01-31',
        [departure]: '2012-02-06',
      },
    },
  ],
  [places[countries.vietnam].hoChiMinhCity]: [
    {
      [dates]: {
        [arrival]: '2012-02-24',
        [departure]: '2012-02-29',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-03-29',
        [departure]: '2012-04-06',
      },
    },
    {
      [dates]: {
        [arrival]: '2023-01-13',
        [departure]: '2023-02-10',
      },
    },
  ],
  [places[countries.vietnam].hue]: [
    {
      [dates]: {
        [arrival]: '2012-02-14',
        [departure]: '2012-02-17',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-04-07',
        [departure]: '2012-04-12',
      },
    },
  ],
  [places[countries.vietnam].muiNe]: [
    {
      [dates]: {
        [arrival]: '2012-02-20',
        [departure]: '2012-02-24',
      },
    },
  ],
  [places[countries.vietnam].nhaTrang]: [
    {
      [dates]: {
        [arrival]: '2012-02-18',
        [departure]: '2012-02-20',
      },
    },
  ],
  [places[countries.vietnam].ninhBinh]: [
    {
      [dates]: {
        [arrival]: '2012-02-06',
        [departure]: '2012-02-09',
      },
    },
  ],
  [places[countries.vietnam].thanhHoa]: [
    {
      [dates]: {
        [arrival]: '2012-02-09',
        [departure]: '2012-02-11',
      },
    },
  ],
}
