import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'
import { bangkokData } from './bangkokData'

export const thailandData = {
  [places[countries.thailand].bangkok]: bangkokData,
  [places[countries.thailand].chiangMai]: [
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
  [places[countries.thailand].loei]: [
    {
      [dates]: {
        [arrival]: '2023-05-04',
        [departure]: '2023-05-11',
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
