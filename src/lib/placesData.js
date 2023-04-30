const cambodia = 'Cambodia'
const thailand = 'Thailand'
const vietnam = 'Vietnam'

export const place = 'place'
export const country = 'country'
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
          "There's an embarrassment of Meetup events in Bangkok. On Meetup alone you'll be able to find something that interests you pretty much 7 days per week. Plus, there's plenty of lonely old men sat around in bars to chat to.",
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
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'Decent beds can be well under 1,000 baht/night. Expect to pay 250 to 300 baht for a meal in a western restaurant.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'Absolutely no issues during my stay. Reliable connection fast enough for video calls.',
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
          "Apart from some quite hard to cross roads, this is a very safe city. I didn't feel unsafe or have any issues walking around in the middle of the night.",
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
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'A decent bed will be in the 800 baht range, a meal in a western restaurant will set you back around 200 baht.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'Despite being out of the city centre, the connection was consistent and fast enough for video calls.',
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
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I paid around 825,000 VND for a studio apartment, food starts at around 40,000 VND for a meal in a local restaurant, although expect to pay more like 150,000 VND in a western restaurant, a beer in a bar will typically be 50,000 VND although you can get large beers at street bars for 20,000 VND.',
      },
      [internet]: {
        [verdict]: false,
        [description]:
          "It was perfectly fast when it worked, but I found it to be unstable. Doing an hour-long video call, I'd expect to drop-out a couple of times.",
      },
      [running]: {
        [verdict]: false,
        [description]:
          "I ran in three different places and found them all unenjoyable. The pavements are too congested to run along and the roads are busy making them hard to cross and causing a lot of pollution. Probably the worst running city I've ever been to.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          "There are loads of vegan restaurants here, and many more that have vegan options. Mostly they serve Vietnamese food; there aren't so many choices for vegan western food.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'Apart from crossing the road, at no point I felt my safety was in jeopardy here, and I was out late quite a lot.',
      },
      [social]: {
        [verdict]: true,
        [description]:
          'There are several regular events designed for meeting people on MeetUp.',
      },
      [walking]: {
        [verdict]: false,
        [description]:
          'The pavement are full or motorcycles and vendors, and the roads are busy and difficult to cross.',
      },
    },
    [articlePath]: '/articles/ho-chi-minh-city-for-digital-nomads',
  },
  {
    [place]: 'Huahin',
    [country]: thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          "I had a pretty big room for 871 baht per night. Beers in a bar are around 80 baht, although I had them as cheap as 50 baht. For a meal/drink in a western restaurant you'll pay around 250 to 300 baht.",
      },
      [internet]: {
        [verdict]: false,
        [description]:
          "The Internet in my room was utter garbage. The saving grace was I had good 5G coverage everywhere in Huahin, so as long as you can tether to your phone it's not an issue.",
      },
      [running]: {
        [verdict]: true,
        [description]:
          "The beach is nice to run along, and you can apparently run up some of the nearby mountains (I didn't do this due to injury).",
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "There's one really good vegan restaurant, but beyond that Huahin is pretty lacking in options for vegans. You won't go hungry, but you might have to go back to the same places several times.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'I felt entirely safe wandering around the streets in the middle of the night.',
      },
      [social]: {
        [verdict]: false,
        [description]:
          "Huahin is a very easy place to go and sit in a bar by yourself and meet people, but in terms of organised events to meet new people, I didn't find anything here.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          "Pavements line the main roads, side roads are quiet, pollution is a non-issue, and if you don't fancy walking along the road, as the town's long and thin you can walk along the beach to where you want to go.",
      },
    },
    [articlePath]: '/articles/huahin-for-digital-nomads',
  },
  {
    [place]: 'Phnom Penh',
    [country]: cambodia,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I was paying less than $32/night for an apartment, expect to pay around $7 for a plate of food in a western restaurant, a beer in a bar will typically be $1.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'I consistently had a connection fast enough to make video calls.',
      },
      [running]: {
        [verdict]: false,
        [description]:
          "Neak Banh Tuek Park is a nice place to run, but it's the only one and it's quite small. I'd have liked more variety.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          "There's a small number of nice vegan restaurants, and plenty of other restaurants with vegan options on the menu.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'Some areas felt slightly sketchy to walk around at night time, but I never experienced anything untoward, so maybe it was all in my head.',
      },
      [social]: {
        [verdict]: false,
        [description]:
          'There are a small number of organised events for meeting people, but not very many. I had better luck just sitting in bars and chatting to people.',
      },
      [walking]: {
        [verdict]: false,
        [description]:
          "The already uneven pavements are used as car parks or as restaurants, so you're often forced to walk in the road. Some areas feel pretty grim to walk around.",
      },
    },
    [articlePath]: '/articles/nomadding-in-phnom-penh',
  },
  {
    [place]: 'Siem Reap',
    [country]: cambodia,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I paid less than $25/night for a huge apartment, expect to pay $4 to $6 for a plate of food in a western restaurant, beers in a bar will typically cost $1, but you can pay as little as 50¢ if you hunt around.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          "At no point in my room was I unable to get a connection on which I couldn't make a video call.",
      },
      [running]: {
        [verdict]: true,
        [description]:
          'The streets are wide and quiet so you can run pretty much anywhere.',
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          "There's only one fully-vegan restaurant in town, but many places have vegan options, and the quality of food is really, really good.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'I saw nothing here to make me question my safety, even when walking around at night. Some soi dogs bark when you walk down side roads at night, but none ever got close to attacking me',
      },
      [social]: {
        [verdict]: false,
        [description]:
          "It's a very chatty city, so meeting people in bars/restaurants is easy, but there aren't many organised social events for meeting new people.",
      },
      [walking]: {
        [verdict]: true,
        [description]: 'Wide, empty pavements and low amounts of traffic.',
      },
    },
    [articlePath]: '/articles/siem-reap-for-digital-nomads',
  },
  {
    [place]: 'Udon Thani',
    [country]: thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I paid 762 baht per night for a studio in a really, really nice hotel, many local restaurants offer meals for around 50 baht, a day pass at my nearest gym was 160 baht, expect to pay around 80 baht for a beer in a bar.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'Wifi download speeds of around 150mbps and upload speeds of almost 300mbps on a reliable connection in my hotel, with 5G available everywhere I went in town.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          'Nong Prachak lake has a circumference of about 3.1km, and has a running track the entire way around.',
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "There are some vegan restaurants, and some others with vegan options so you won't go hungry, but they aren't as numerous as I'd like. I found myself eating in the same places several times.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "I walked everywhere I went here, including at night. Didn't experience any problems or feel like I might.",
      },
      [social]: {
        [verdict]: false,
        [description]:
          'No events on Meetup or Facebook, and no other obvious ways of meeting people other than going and sitting in a bar.',
      },
      [walking]: {
        [verdict]: true,
        [description]:
          'Pavements everywhere and most are walkable, just occasionally being blocked by vehicles/street businesses (although they are very uneven).',
      },
    },
    [articlePath]: null,
  },
].sort((a, b) => (a[place] > b[place] ? 1 : b[place] > a[place] ? -1 : 0))
