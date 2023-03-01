const cambodia = 'Cambodia'
const thailand = 'Thailand'
const vietnam = 'Vietnam'

export const place = 'place'
export const country = 'country'
const lastVisited = 'lastVisited'
export const criteria = 'criteria'
const articlePath = 'articlePath'

const affordable = 'affordable'
const internet = 'internet'
const running = 'running'
const veganFood = 'veganFood'
const safe = 'safe'
const social = 'social'
const walking = 'walking'

export const verdict = 'verdict'
const description = 'description'

export const criteriaHeadings = {
  [affordable]: 'Affordable',
  [internet]: 'Fast and reliable Internet',
  [running]: 'Good places to run',
  [veganFood]: 'Good availability and variety of vegan food',
  [safe]: 'Safe',
  [social]: 'Sufficient social opportunities',
  [walking]: 'Pleasant to walk around',
}

export const placesData = [
  {
    [place]: 'Bangkok',
    [country]: thailand,
    [lastVisited]: '2022',
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]: 'Bangkok is very affordable because...',
      },
      [internet]: {
        [verdict]: true,
        [description]: 'The Internet in Bangkok is...',
      },
      [running]: {
        [verdict]: true,
      },
      [veganFood]: {
        [verdict]: true,
      },
      [safe]: {
        [verdict]: true,
      },
      [social]: {
        [verdict]: true,
      },
      [walking]: {
        [verdict]: true,
      },
    },
    [articlePath]: '',
  },
  {
    [place]: 'Chiang Mai',
    [country]: thailand,
    [lastVisited]: '2022',
    [criteria]: {
      [affordable]: {
        [verdict]: true,
      },
      [internet]: {
        [verdict]: true,
      },
      [running]: {
        [verdict]: false,
      },
      [veganFood]: {
        [verdict]: true,
      },
      [safe]: {
        [verdict]: true,
      },
      [social]: {
        [verdict]: true,
      },
      [walking]: {
        [verdict]: false,
      },
    },
    [articlePath]: '',
  },
  {
    [place]: 'Chiang Rai',
    [country]: thailand,
    [lastVisited]: '2022',
    [criteria]: {
      [affordable]: {
        [verdict]: true,
      },
      [internet]: {
        [verdict]: true,
      },
      [running]: {
        [verdict]: true,
      },
      [veganFood]: {
        [verdict]: false,
      },
      [safe]: {
        [verdict]: true,
      },
      [social]: {
        [verdict]: false,
      },
      [walking]: {
        [verdict]: true,
      },
    },
    [articlePath]: '',
  },
  {
    [place]: 'Ho Chi Minh City',
    [country]: vietnam,
    [lastVisited]: '2023',
    [criteria]: {
      [affordable]: {
        [verdict]: true,
      },
      [internet]: {
        [verdict]: false,
      },
      [running]: {
        [verdict]: false,
      },
      [veganFood]: {
        [verdict]: true,
      },
      [safe]: {
        [verdict]: true,
      },
      [social]: {
        [verdict]: true,
      },
      [walking]: {
        [verdict]: false,
      },
    },
    [articlePath]: '',
  },
  {
    [place]: 'Phnom Penh',
    [country]: cambodia,
    [lastVisited]: '2023',
    [criteria]: {
      [affordable]: {
        [verdict]: true,
      },
      [internet]: {
        [verdict]: true,
      },
      [running]: {
        [verdict]: true,
      },
      [veganFood]: {
        [verdict]: true,
      },
      [safe]: {
        [verdict]: true,
      },
      [social]: {
        [verdict]: false,
      },
      [walking]: {
        [verdict]: false,
      },
    },
    [articlePath]: '',
  },
  {
    [place]: 'Siem Reap',
    [country]: cambodia,
    [lastVisited]: '2023',
    [criteria]: {
      [affordable]: {
        [verdict]: true,
      },
      [internet]: {
        [verdict]: true,
      },
      [running]: {
        [verdict]: true,
      },
      [veganFood]: {
        [verdict]: true,
      },
      [safe]: {
        [verdict]: true,
      },
      [social]: {
        [verdict]: true,
      },
      [walking]: {
        [verdict]: true,
      },
    },
    [articlePath]: '',
  },
]
