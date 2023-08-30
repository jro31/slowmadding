import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'
import { bangkokData } from './bangkokData'

export const thailandData = {
  [places[countries.thailand].bangkok]: bangkokData,
  [places[countries.thailand].chiangMai]: [
    {
      [dates]: {
        [arrival]: '2011-09-22',
        [departure]: '2011-09-24',
      },
    },
    {
      [dates]: {
        [arrival]: '2011-10-04',
        [departure]: '2011-10-05',
      },
    },
    {
      [dates]: {
        [arrival]: '2022-11-03',
        [departure]: '2022-11-17',
      },
    },
  ],
  [places[countries.thailand].chiangRai]: [
    {
      [dates]: {
        [arrival]: '2022-11-17',
        [departure]: '2022-12-01',
      },
    },
  ],
  [places[countries.thailand].huahin]: [
    {
      [dates]: {
        [arrival]: '2023-03-23',
        [departure]: '2023-04-06',
      },
    },
  ],
  [places[countries.thailand].kanchanaburi]: [
    {
      [dates]: {
        [arrival]: '2011-09-16',
        [departure]: '2011-09-19',
      },
    },
  ],
  [places[countries.thailand].khonKaen]: [
    {
      [dates]: {
        [arrival]: '2011-10-06',
        [departure]: '2011-10-07',
      },
    },
  ],
  [places[countries.thailand].loei]: [
    {
      [dates]: {
        [arrival]: '2023-05-04',
        [departure]: '2023-05-11',
      },
    },
  ],
  [places[countries.thailand].lopburi]: [
    {
      [dates]: {
        [arrival]: '2011-09-19',
        [departure]: '2011-09-21',
      },
    },
  ],
  [places[countries.thailand].maeHongSon]: [
    {
      [dates]: {
        [arrival]: '2011-09-29',
        [departure]: '2011-10-01',
      },
    },
  ],
  [places[countries.thailand].nakhonRatchasima]: [
    {
      [dates]: {
        [arrival]: '2012-04-16',
        [departure]: '2012-04-17',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-04-28',
        [departure]: '2012-04-29',
      },
    },
  ],
  [places[countries.thailand].nongKhai]: [
    {
      [dates]: {
        [arrival]: '2011-10-07',
        [departure]: '2011-10-10',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-04-29',
        [departure]: '2012-04-30',
      },
    },
    {
      [dates]: {
        [arrival]: '2012-05-20',
        [departure]: '2012-05-23',
      },
    },
  ],
  [places[countries.thailand].pai]: [
    {
      [dates]: {
        [arrival]: '2011-09-24',
        [departure]: '2011-09-29',
      },
    },
    {
      [dates]: {
        [arrival]: '2011-10-01',
        [departure]: '2011-10-04',
      },
    },
  ],
  [places[countries.thailand].phitsanulok]: [
    {
      [dates]: {
        [arrival]: '2011-09-21',
        [departure]: '2011-09-22',
      },
    },
    {
      [dates]: {
        [arrival]: '2011-10-05',
        [departure]: '2011-10-06',
      },
    },
  ],
  [places[countries.thailand].udonThani]: [
    {
      [dates]: {
        [arrival]: '2023-04-20',
        [departure]: '2023-05-04',
      },
    },
  ],
}
