import { countries, places } from '@/lib/placeNames'
import { dates, arrival, departure } from '@/lib/timelineData/variables'

export const romaniaData = {
  [places[countries.romania].bucharest]: [
    {
      [dates]: {
        [arrival]: '2023-06-14',
        [departure]: '2023-07-13',
      },
    },
    {
      [dates]: {
        [arrival]: '2025-07-09',
        [departure]: '2025-08-06',
      },
    },
    {
      [dates]: {
        [arrival]: '2026-07-02',
        [departure]: '2026-07-30',
      },
    },
  ],
  [places[countries.romania].clujNapoca]: [
    {
      [dates]: {
        [arrival]: '2026-09-03',
        [departure]: '2026-10-01',
      },
    },
  ],
  [places[countries.romania].timisoara]: [
    {
      [dates]: {
        [arrival]: '2026-07-30',
        [departure]: '2026-09-03',
      },
    },
  ],
}
