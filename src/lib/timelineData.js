import { countries, places } from './placeNames'

export const timelineData = {
  [countries.cambodia]: {
    [places[countries.cambodia].phnomPenh]: [
      {
        dates: {
          arrival: '2022-12-16',
          departure: '2022-01-13',
        },
      },
    ],
    [places[countries.cambodia].siemReap]: [
      {
        dates: {
          arrival: '2023-02-11',
          departure: '2023-03-11',
        },
      },
    ],
  },
  [countries.romania]: {
    [places[countries.romania].bucharest]: [
      {
        dates: {
          arrival: '2023-06-14',
          departure: '2023-07-13',
        },
      },
    ],
  },
  [countries.thailand]: {
    [places[countries.thailand].bangkok]: [
      {
        dates: {
          arrival: '2022-10-07',
          departure: '2022-11-03',
        },
      },
      {
        dates: {
          arrival: '2022-12-01',
          departure: '2022-12-16',
        },
      },
      {
        dates: {
          arrival: '2023-03-11',
          departure: '2023-03-23',
        },
      },
      {
        dates: {
          arrival: '2023-04-06',
          departure: '2023-04-20',
        },
      },
      {
        dates: {
          arrival: '2023-05-11',
          departure: '2023-05-24',
        },
      },
    ],
    [places[countries.thailand].chiangMai]: [
      {
        dates: {
          arrival: '2022-11-03',
          departure: '2022-11-17',
        },
      },
    ],
    [places[countries.thailand].chiangRai]: [
      {
        dates: {
          arrival: '2022-11-17',
          departure: '2022-12-01',
        },
      },
    ],
    [places[countries.thailand].huahin]: [
      {
        dates: {
          arrival: '2023-03-23',
          departure: '2023-04-06',
        },
      },
    ],
    [places[countries.thailand].loei]: [
      {
        dates: {
          arrival: '2023-05-04',
          departure: '2023-05-11',
        },
      },
    ],
    [places[countries.thailand].udonThani]: [
      {
        dates: {
          arrival: '2023-04-20',
          departure: '2023-05-04',
        },
      },
    ],
  },
  [countries.vietnam]: {
    [places[countries.vietnam].hoChiMinhCity]: [
      {
        dates: {
          arrival: '2023-01-13',
          departure: '2023-02-10',
        },
      },
    ],
  },
}
