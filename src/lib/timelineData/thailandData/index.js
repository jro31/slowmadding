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
        [arrival]: '2013-10-22',
        [departure]: '2013-10-24',
      },
    },
    {
      [dates]: {
        [arrival]: '2015-01-29',
        [departure]: '2015-02-04',
      },
    },
    {
      [dates]: {
        [arrival]: '2016-01-02',
        [departure]: '2016-01-06',
      },
    },
    {
      [dates]: {
        [arrival]: '2018-06-04',
        [departure]: '2018-06-08',
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
        [arrival]: '2013-10-24',
        [departure]: '2013-10-26',
      },
    },
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
        [arrival]: '2016-06-07',
        [departure]: '2016-06-11',
      },
    },
    {
      [dates]: {
        [arrival]: '2023-03-23',
        [departure]: '2023-04-06',
      },
    },
    {
      [dates]: {
        [arrival]: '2023-11-09',
        [departure]: '2023-11-16',
      },
    },
    {
      [dates]: {
        [arrival]: '2024-02-17',
        [departure]: '2024-03-02',
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
    {
      [dates]: {
        [arrival]: '2024-01-23',
        [departure]: '2024-01-31',
      },
    },
    {
      [dates]: {
        [arrival]: '2024-11-29',
        [departure]: '2024-12-11',
      },
    },
  ],
  [places[countries.thailand].kohPhiPhi]: [
    {
      [dates]: {
        [arrival]: '2013-05-28',
        [departure]: '2013-06-01',
      },
    },
  ],
  [places[countries.thailand].kohSamet]: [
    {
      [dates]: {
        [arrival]: '2016-10-31',
        [departure]: '2016-11-01',
      },
    },
  ],
  [places[countries.thailand].krabi]: [
    {
      [dates]: {
        [arrival]: '2015-01-21',
        [departure]: '2015-01-29',
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
    {
      [dates]: {
        [arrival]: '2017-02-20',
        [departure]: '2017-02-21',
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
    {
      [dates]: {
        [arrival]: '2023-11-30',
        [departure]: '2023-12-07',
      },
    },
    {
      [dates]: {
        [arrival]: '2024-01-31',
        [departure]: '2024-02-01',
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
    {
      [dates]: {
        [arrival]: '2015-09-16',
        [departure]: '2015-09-17',
      },
    },
    {
      [dates]: {
        [arrival]: '2023-12-23',
        [departure]: '2023-12-25',
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
  [places[countries.thailand].patong]: [
    {
      [dates]: {
        [arrival]: '2013-05-25',
        [departure]: '2013-05-28',
      },
    },
    {
      [dates]: {
        [arrival]: '2013-06-01',
        [departure]: '2013-06-02',
      },
    },
  ],
  [places[countries.thailand].pattaya]: [
    {
      [dates]: {
        [arrival]: '2013-05-01',
        [departure]: '2013-05-02',
      },
    },
    {
      [dates]: {
        [arrival]: '2023-11-16',
        [departure]: '2023-11-30',
      },
    },
    {
      [dates]: {
        [arrival]: '2024-02-01',
        [departure]: '2024-02-17',
      },
    },
    {
      [dates]: {
        [arrival]: '2024-11-14',
        [departure]: '2024-11-29',
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
    {
      [dates]: {
        [arrival]: '2017-02-21',
        [departure]: '2017-02-22',
      },
    },
  ],
  [places[countries.thailand].phuketTown]: [
    {
      [dates]: {
        [arrival]: '2013-05-23',
        [departure]: '2013-05-25',
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
    {
      [dates]: {
        [arrival]: '2023-12-07',
        [departure]: '2023-12-23',
      },
    },
    {
      [dates]: {
        [arrival]: '2024-12-11',
        [departure]: '2025-01-08',
      },
    },
  ],
}
