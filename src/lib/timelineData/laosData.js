import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const laosData = {
  [places[countries.laos].banKloukhan]: [
    {
      [dates]: {
        [arrival]: '2011-10-30',
        [departure]: '2011-10-31',
      },
    },
  ],
  [places[countries.laos].luangNamtha]: [
    {
      [dates]: {
        [arrival]: '2011-11-03',
        [departure]: '2011-11-07',
      },
    },
  ],
  [places[countries.laos].luangPrabang]: [
    {
      [dates]: {
        [arrival]: '2011-10-23',
        [departure]: '2011-10-26',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-05-08',
        [departure]: '2012-05-13',
      },
    },
  ],
  [places[countries.laos].muangNgoi]: [
    {
      [dates]: {
        [arrival]: '2011-10-26',
        [departure]: '2011-10-30',
      },
    },
    {
      [dates]: {
        [arrival]: '2011-10-31',
        [departure]: '2011-11-02',
      },
    },
  ],
  [places[countries.laos].nongKhiaw]: [
    {
      [dates]: {
        [arrival]: '2011-11-02',
        [departure]: '2011-11-03',
      },
    },
  ],
  [places[countries.laos].savannakhet]: [
    {
      [dates]: {
        [arrival]: '2012-04-12',
        [departure]: '2012-04-16',
      },
    },
  ],
  [places[countries.laos].vangVieng]: [
    {
      [dates]: {
        [arrival]: '2011-10-20',
        [departure]: '2011-10-23',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-05-02',
        [departure]: '2012-05-08',
      },
    },
  ],
  [places[countries.laos].vientiane]: [
    {
      [dates]: {
        [arrival]: '2011-10-10',
        [departure]: '2011-10-20',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-04-30',
        [departure]: '2012-05-02',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-05-13',
        [departure]: '2012-05-20',
      },
    },
    {
      [dates]: {
        [arrival]: '2015-09-15',
        [departure]: '2015-09-16',
      },
    },
  ],
}
