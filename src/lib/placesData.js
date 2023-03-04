const cambodia = 'Cambodia'
const thailand = 'Thailand'
const vietnam = 'Vietnam'

export const place = 'place'
export const country = 'country'
const lastVisited = 'lastVisited'
export const criteria = 'criteria'
export const articlePath = 'articlePath'

const affordable = 'affordable'
const internet = 'internet'
const running = 'running'
const veganFood = 'veganFood'
const safe = 'safe'
const social = 'social'
const walking = 'walking'

export const verdict = 'verdict'
export const description = 'description'

export const criteriaHeadings = {
  [affordable]: 'Affordable',
  [internet]: 'Fast and reliable Internet',
  [running]: 'Good places to run',
  [veganFood]: 'Good availability and variety of vegan food',
  [safe]: 'Safe',
  [social]: 'Sufficient social opportunities',
  [walking]: 'Pleasant to walk around',
}

// TODO: Sections to consider adding - Friendly people
export const placesData = [
  {
    [place]: 'Bangkok',
    [country]: thailand,
    [lastVisited]: '2022',
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          "It's at the more expensive end of cities in this region, but is still cheap enough to survive comfortablty on a modest salary. A beer in a bar is going to cost around 100 baht, and a decent hotel room starts at about 800 baht/night. Expect to pay 300-400 baht for a meal in a western restaurant.",
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'Thailand has some of the fastest Internet in the world. In Bangkok you can expect a fast, reliable connection, with 5G available pretty much everywhere on mobile.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          "There aren't too many places to run in Bangkok, but the ones that are here are sufficient as long as you're staying within reach.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          "In Happy Cow's Top 10 Vegan-Friendly Cities 2022, Bangkok ranked 7th. Vegan food restaurants are everywhere here, and street vendors selling pre-cut fruit are all over the city.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "I've spent about six years in Bangkok and never had an issue. It's a city I feel safe walking around at all hours of the night.",
      },
      [social]: {
        [verdict]: true,
        [description]:
          "There's an embarrassment of Meetup events in Bangkok. On Meetup alone you'll be able to find something that interests you pretty 7 days per week. Plus, there's plenty of lonely old men sat around in bars to chat to.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          "This might not be an opinion shared with those who aren't used to the heat or to sharing the pavement with motorcycles, but in my years in Bangkok, I've walked all over this city and not had an issue. Despite the number of vehicles, pollution doesn't bother me here.",
      },
    },
    [articlePath]: null,
  },
  {
    [place]: 'Chiang Mai',
    [country]: thailand,
    [lastVisited]: '2022',
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'Decent beds can be well under 1,000 baht/night. Expect to pay 250 to 300 baht for a meal in a western restaurant.',
      },
      [internet]: {
        [verdict]: true,
        [description]: 'Fast and reliable.',
      },
      [running]: {
        [verdict]: false,
        [description]:
          "The university is the only viable place within the city, and that's right on the edge and a pain to get to.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          "Some of the best vegan restaurants I've ever been to, and all very affordable.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "Apart from some quite hard to cross roads, this is a very safe city. I haven't felt unsafe or had any issues walking around in the middle of the night.",
      },
      [social]: {
        [verdict]: true,
        [description]:
          'There are multiple Facebook event here designed to meet new people.',
      },
      [walking]: {
        [verdict]: false,
        [description]:
          'The pollution here just sits, and some of the busy roads are a pain to cross.',
      },
    },
    [articlePath]: '/articles/nomadding-in-chiang-mai',
  },
  {
    [place]: 'Chiang Rai',
    [country]: thailand,
    [lastVisited]: '2022',
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'A decent bed will be in the 800 baht range, a meal in a western restaurant will set you back around 200 baht.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          "It was fast and I didn't have an issue while I was here.",
      },
      [running]: {
        [verdict]: true,
        [description]:
          'The old airport is easy to get to and is a perfect big, open space to go running in.',
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "There is some vegan food here, and it's good quality. There just isn't enough of it. By the time I left I was a bit fed-up of eating at the same places.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'I walked back to my room on the edge of the city late at night many times. Never got the inkling of a problem.',
      },
      [social]: {
        [verdict]: false,
        [description]: "I didn't find there was very much to do here socially.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          'The roads are quiet enough here that I felt comfortable walking and running along the side of the road in places that there were no pavements.',
      },
    },
    [articlePath]: '/articles/nomadding-in-chiang-rai',
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
    [articlePath]: null,
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
    [articlePath]: '/articles/nomadding-in-phnom-penh',
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
    [articlePath]: null,
  },
].sort((a, b) => (a[place] > b[place] ? 1 : b[place] > a[place] ? -1 : 0))
