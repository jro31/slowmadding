import { countries, places } from './placeNames'

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

// TODO: Sections to consider adding - Friendly people, green spaces
export const placesData = [
  {
    [place]: places[countries.greece].athens,
    [country]: countries.greece,
    [criteria]: {
      [affordable]: {
        [verdict]: false,
        [description]:
          "While cheap compared to the likes of London or New York, there's a noticeable hike in prices compared to similar cities in neighbouring countries. I paid €46/night for the cheaper of my rooms here, a beer in a bar is around €5, expect to pay around €8-10 for a meal in a restaurant (without a drink).",
      },
      [internet]: {
        [verdict]: false,
        [description]:
          "In my first room the connection was very slow. In my second room it was faster but unreliable as it went out for 48 hours at one point. The mobile networks are ok, but a pain if you don't speak Greek as the apps aren't in English.",
      },
      [running]: {
        [verdict]: true,
        [description]:
          'There are a small number of parks suitable for running (not as many as in other European cities), and the streets are quiet enough to run along comfortably.',
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          'There are several vegan restaurants dotted around the city, and many more that are vegan friendly. A small amount of intentionally vegan produce is available in the supermarkets.',
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "I walked around late at night a lot and never saw or thought I was going to have an issue. Other people told me they didn't feel it was a safe city, but I never experienced it myself.",
      },
      [social]: {
        [verdict]: true,
        [description]:
          "There are several very active social groups in Athens. You'll find something happening on most days.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          "Nowhere in Athens in flat, and the pavement surfaces are pretty uneven. Still, it's a very pleasant city to walk on foot, without too much traffic.",
      },
    },
    [articlePath]: '/articles/athens-for-digital-nomads',
  },
  {
    [place]: places[countries.thailand].bangkok,
    [country]: countries.thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          "It's at the more expensive end of cities in this region, but is still cheap enough to survive comfortably on a modest salary. A beer in a bar is going to cost around 100 baht, and a decent hotel room starts at about 800 baht/night. Expect to pay 300-400 baht for a meal in a western restaurant.",
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'Thailand has some of the fastest Internet in the world. In Bangkok you can expect a fast, reliable connection, with 5G available pretty much everywhere.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          "There aren't too many places to run in Bangkok, but the ones that are here are sufficient. Just ensure that you're staying nearby.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          "In Happy Cow's Top 10 Vegan-Friendly Cities 2022, Bangkok ranked 7th. Vegan-friendly restaurants are everywhere here, and street vendors selling pre-cut fruit are all over the city.",
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
    [articlePath]: '/articles/bangkok-for-digital-nomads',
  },
  {
    [place]: places[countries.romania].bucharest,
    [country]: countries.romania,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I paid 172 lei per night for a really nice Airbnb, a beer in a bar will be around 18 lei, expect to pay 50 lei for a meal with a drink in a restaurant.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'My Airbnb wifi consistently had download speeds over 600mb/s, and upload speeds over 500mb/s. 4G is available throughout the city and is fast enough to do video calls.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          "Several nice parks for running, or if you want to run along the pavements they're wide and quiet, crossing the road is mostly quick and easy, and there isn't much pollution from traffic.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          'There are only 4 fully vegan restaurants in Bucharest, but many restaurants have vegan offerings, and supermarkets here are pretty vegan friendly, often having vegan sections.',
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "There's very evident drug addiction in Bucharest. You might get hassled for money, which can be annoying but I never found it threatening. I walked around late at night many times without issue.",
      },
      [social]: {
        [verdict]: false,
        [description]:
          "There are some events I found for meeting new people, there just aren't very many. I would go to an event roughly once per week while I was here, but I'd like to have found more.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          "There are pavements everywhere, which are wide and quiet, several pedestrianised areas, there's very little traffic, and cars generally obey the law give way to pedestrians.",
      },
    },
    [articlePath]: '/articles/bucharest-for-digital-nomads',
  },
  {
    [place]: places[countries.thailand].chiangMai,
    [country]: countries.thailand,
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
          'There are several Facebook events here specifically for meeting new people.',
      },
      [walking]: {
        [verdict]: false,
        [description]:
          'The pollution here just sits, and some of the busy roads are a pain to cross.',
      },
    },
    [articlePath]: '/articles/chiang-mai-for-digital-nomads',
  },
  {
    [place]: places[countries.thailand].chiangRai,
    [country]: countries.thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'A decent bed will be around 800 baht per night, a meal in a western restaurant will set you back around 200 baht.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'Despite staying out of the city centre, the wifi in my room was reliable and fast enough for video calls.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          'The old airport is easy to get to and is a flat, big, open space to go running in.',
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
    [articlePath]: '/articles/chiang-rai-for-digital-nomads',
  },
  {
    [place]: places[countries.vietnam].hoChiMinhCity,
    [country]: countries.vietnam,
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
          "I ran in three different places and found them all unenjoyable. The pavements are too congested to run along and the roads are busy making them hard to cross and causing a lot of pollution. Probably the worst running city I've been to.",
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
          'The pavements are full or motorcycles and vendors, and the roads are busy and difficult to cross.',
      },
    },
    [articlePath]: '/articles/ho-chi-minh-city-for-digital-nomads',
  },
  {
    [place]: places[countries.thailand].huahin,
    [country]: countries.thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          "Nice rooms are available for less than 900 baht per night, beers in a bar are typically around 80 baht although I found them as cheap as 50 baht, for a meal/drink in a western restaurant you'll pay around 250 to 300 baht.",
      },
      [internet]: {
        [verdict]: false,
        [description]:
          'The Internet in my room was utter garbage. The saving grace was I had good 5G coverage everywhere in Huahin so primarily tethered my laptop to my phone.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          "The beach is nice to run along, and you can apparently run up some of the nearby mountains (I haven't done this yet).",
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "There's one really good vegan restaurant, but beyond that Huahin is lacking in vegan options. You won't go hungry, but you might get bored of going to the same places again and again.",
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
          "Pavements line the main roads, side roads are quiet, pollution is a non-issue, and if you don't fancy walking along the road you can go on the beach instead.",
      },
    },
    [articlePath]: '/articles/huahin-for-digital-nomads',
  },
  {
    [place]: places[countries.thailand].khonKaen,
    [country]: countries.thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I had a really nice room in a hotel for less than 800 baht per night, a plate of food in a local restaurant is around 50 baht, a beer in a bar is about 80 baht.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'Fast and stable wifi in my room, 5G network connection everywhere I went.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          'Bueng Kaen Nakhon Reservoir is a lake with a 3.2km path going around the outside and makes a lovely place to go for a run.',
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          'Khon Kaen is deceptively vegan-friendly, but a lack of vegan food available in the evenings makes it hard to recommend.',
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'Not even a sniff of an issue while I was here. Feels safe to walk around at all hours of day and night.',
      },
      [social]: {
        [verdict]: false,
        [description]:
          "There's a small cluster of foreigner-aimed bars that are good to go for a beer and chat to people, but I found nothing in the way of organised events.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          "Local people don't walk anywhere so the pavements are void of other pedestrians, but it's still a pleasant city of which to wander the streets.",
      },
    },
    [articlePath]: null, // TODO
  },
  {
    [place]: places[countries.thailand].loei,
    [country]: countries.thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I paid 950 baht per night for my room, meals in local restaurants are typically 40 baht.',
      },
      [internet]: {
        [verdict]: false,
        [description]:
          'At the guesthouse I was staying at the router barely reached into the room so would continually disconnect. I had to tether to my 5G whenever I needed a reliable connection.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          'Kut Kong Public Park is a viable place to run, and the Loei Provincial Hall has a 400m track in its grounds. There are also long cycle lanes that can be used for running.',
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "There are two local 'jay' restaurants. That is all I found, and they're both closed in the evenings and on Sundays.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'At no point did I feel even remotely unsafe here. Everyone here is very friendly.',
      },
      [social]: {
        [verdict]: false,
        [description]:
          "I didn't see another foreigner during my week here, and when I went to the one supposed western pub in town on a Saturday evening it was closed.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          "As long as you can stomach the heat, everywhere in town is comfortably walkable. Most roads have pavements, and traffic is insufficient to feel unsafe on those that don't. You might get barked at by dogs on quieter roads, but none felt a threat.",
      },
    },
    [articlePath]: '/articles/loei-for-digital-nomads',
  },
  {
    [place]: places[countries.thailand].nakhonRatchasima,
    [country]: countries.thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I paid about 1,200 baht/night for a really nice hotel room (much cheaper rooms are available), a meal in a local restaurant is about 45 baht.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'Multiple fast and reliable connections in my room, 5G available all over the city.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          'Bung Ta Lua Park is a lake with a wide running track around the outside. One lap is about 3.2km.',
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "There are a small number of local 'jay' restaurants around the city, but vegan food is lacking in both quantity and variety.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'I walked everywhere when I was here and always felt safe.',
      },
      [social]: {
        [verdict]: false,
        [description]: 'Nothing going on.',
      },
      [walking]: {
        [verdict]: true,
        [description]:
          'Wide pavements, fairly quiet roads, a really pleasant city to walk around.',
      },
    },
    [articlePath]: '/articles/nakhon-ratchasima-for-digital-nomads',
  },
  {
    [place]: places[countries.thailand].pattaya,
    [country]: countries.thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I paid less than 1,200 baht per night for a decent-sized apartment, you can find beer for as low as 50 baht, a plate of food in a western restaurant costs around 150 baht.',
      },
      [internet]: {
        [verdict]: false,
        [description]:
          "The wifi in my first room had a login page and I'd get quickly logged-out on putting my device down, in my second room the connection was too slow for video calls. I had to tether to my phone, which also had a poor/unstable connection here.",
      },
      [running]: {
        [verdict]: true,
        [description]:
          'Running to and along the beach I found to be a pretty pleasant route. You can run in most of Pattaya without issue, especially out of the city centre.',
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          'There are a couple of fully vegan restaurants here, and several other vegetarian places.',
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "I was out late pretty much every night, often walking home alone. Didn't have an issue.",
      },
      [social]: {
        [verdict]: false,
        [description]:
          "Pattaya is the easiest place in the world to go out on your own and have fun, but I didn't find any events specifically for meeting people/socialising.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          'Apart from the crowded bar areas in the centre of town, wide and quiet pavements make Pattaya a pleasant place to walk around.',
      },
    },
    [articlePath]: null, // TODO
  },
  {
    [place]: places[countries.cambodia].phnomPenh,
    [country]: countries.cambodia,
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
          "Neak Banh Tuek Park is an ok place to run, but it's the only one and it's quite small. I'd have liked more variety.",
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
          "The already uneven pavements are used as car parks and restaurants, so you're often forced to walk in the road. Some areas feel pretty grim to walk around.",
      },
    },
    [articlePath]: '/articles/phnom-penh-for-digital-nomads',
  },
  {
    [place]: places[countries.cambodia].siemReap,
    [country]: countries.cambodia,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I paid less than $25/night for a huge apartment, expect to pay $4 to $6 for a plate of food in a western restaurant, beers in a bar will typically cost $1, but you can pay as little as 50¢ if you hunt around.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'At no point in my room was I unable to get a connection on which I could make video calls.',
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
          'I saw nothing here to make me question my safety, even when walking around at night. Stray dogs bark at you when you walk down side roads at night, but none ever felt close to attacking.',
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
    [place]: places[countries.bulgaria].sofia,
    [country]: countries.bulgaria,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I was paying around 60 lev per night for a decent Airbnb, a local beer will cost around 5 lev in a bar, expect to pay about 20 lev for a meal with a drink in a western restaurant.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'The connection in my room was 100% reliable and sufficient for video calls (roughly 45mb/s download speed, 30mb/s upload).',
      },
      [running]: {
        [verdict]: true,
        [description]:
          'Running along the pavement is comfortable and there a couple of really good parks for running.',
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "There are a couple of very good vegan restaurants, but Sofia could do with more. Supermarkets don't really cater to vegans.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'Not so much as an inkling of feeling unsafe while I was here.',
      },
      [social]: {
        [verdict]: false,
        [description]:
          "Meetup only has one regular event here, and the organiser never shows up, so it's unpredictable. I didn't find much else going on.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          'Really beautfiul streets in the old town; the best way to explore the city.',
      },
    },
    [articlePath]: '/articles/sofia-for-digital-nomads',
  },
  {
    [place]: places[countries.thailand].udonThani,
    [country]: countries.thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I paid less than 770 baht per night for both of my rooms here, many local restaurants offer meals for around 50 baht, a day pass at the gym I went to was 160 baht, expect to pay around 80 baht for a beer in a bar.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'A consistently fast and reliable connection in both of my rooms, with 5G available everywhere I went in town.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          "Nong Prachak Park, Nong Bua Public Park and Nong Sim Public Park are all big lakes with running tracks around the outside. One of the most running-friendly cities I've been to.",
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
          'No events on Meetup or Facebook, and no other obvious ways of meeting people other than going and sitting in a bar, which is a lot of fun here.',
      },
      [walking]: {
        [verdict]: true,
        [description]:
          'Pavements everywhere and most are walkable, just occasionally being blocked by vehicles/street businesses.',
      },
    },
    [articlePath]: '/articles/udon-thani-for-digital-nomads',
  },
  {
    [place]: places[countries.laos].vientiane,
    [country]: countries.laos,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'Decent rooms are available for less than 3,000,000 kip per week, a meal in a western restaurant starts at about 60,000 kip, a large local beer is around 35,000 kip.',
      },
      [internet]: {
        [verdict]: false,
        [description]: 'Very unstable wifi and network connections.',
      },
      [running]: {
        [verdict]: false,
        [description]:
          "The pavements aren't really suitable for running and there are no green outdoor spaces.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          'A nice mix of vegan western and local food is available throughout the city.',
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "Apart from erratic drivers there are no safety concerns here. Incredibly friendly people and one of the safest cities I've been to.",
      },
      [social]: {
        [verdict]: false,
        [description]:
          "Not much going on in terms of organised events and it's not a great city for going to a bar by yourself either.",
      },
      [walking]: {
        [verdict]: false,
        [description]:
          'Cars use the pavements for parking so you continually have to walk in the road, some roads take a while to cross, vehicle pollution is noticeable.',
      },
    },
    [articlePath]: '/articles/vientiane-for-digital-nomads',
  },
].sort((a, b) => (a[place] > b[place] ? 1 : b[place] > a[place] ? -1 : 0))
