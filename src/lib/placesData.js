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
          'Noticeably more expensive than capital cities in surrounding countries. Expect to pay about €55 per night for a nice room and €10 for a meal in a restaurant (without a drink).',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          "Not the fastest Internet in the world, but it's fast enough and reliable enough to work from, including video calls.",
      },
      [running]: {
        [verdict]: false,
        [description]:
          "While there are a small number of parks suitable for running and the streets are ok for running, there's nowhere very inspiring.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          'There are several vegan restaurants dotted around the city, and many more that are vegan friendly. A small amount of intentionally vegan produce is available in the supermarkets.',
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "I've walked around late at night a lot and have never seen or thought I was going to have an issue. Other people told me they didn't feel it was a safe city, but I never experienced it myself.",
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
          'Bangkok is one of the best cities in the world for vegans. Vegan-friendly restaurants are everywhere, and street vendors selling pre-cut fruit are all over the city.',
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "I've spent about seven years in Bangkok and never had an issue. It's a city I feel safe walking around at all hours of the night.",
      },
      [social]: {
        [verdict]: true,
        [description]:
          "There's an embarrassment of Meetup events in Bangkok. You'll be able to find something that interests you pretty much 7 days per week.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          "This might not be an opinion shared with those who aren't used to the heat or to sharing the pavement with motorcycles, but in my years in Bangkok, I've walked all over this city and not had an issue.",
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
          'Very fast and reliable wifi in both of my Airbnbs here.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          "Several nice parks for running, or if you want to run along the pavements they're wide and quiet, crossing the road is mostly quick and easy, and there isn't much pollution from traffic.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          'Fully-vegan restaurants are lacking, but many non-vegan restaurants have vegan offerings. The supermarkets here are very vegan-friendly.',
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
    [place]: places[countries.hungary].budapest,
    [country]: countries.hungary,
    [criteria]: {
      [affordable]: {
        [verdict]: false,
        [description]:
          'Expensive relative to comparable cities in the region, particularly for accommodation. I paid around 21,000 HUF per night for one of the cheaper private accommodations on Airbnb, a plate of food in a restaurant is about 3,500 HUF, a beer in a bar costs around 1,500 HUF, and a single trip on public transport is 450 HUF.',
      },
      [internet]: {
        [verdict]: false,
        [description]:
          "Internet in my Airbnb was slow but useable, but the mobile networks in Budapest are the least user-friendly I've encountered anywhere.",
      },
      [running]: {
        [verdict]: true,
        [description]:
          'A 2km jogging track in City Park, and around the city the pavements are wide and pollution minimal.',
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          "Not the best selection, but it's good enough. Plenty of vegan or vegan-friendly restaurants all over the city.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'A lot of drug addicts in the city, but none ever felt threatening even when walking back at night.',
      },
      [social]: {
        [verdict]: true,
        [description]:
          "There's not that much going on, but there is a small community of Meetup events that you can use to meet people.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          'A very walkable city. Pavement are wide, roads are easy to cross, and cars obey traffic signals.',
      },
    },
    [articlePath]: '/articles/budapest-for-digital-nomads',
  },
  {
    [place]: places[countries.thailand].buriram,
    [country]: countries.thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          "Buriram's actually a bit more expensive than other cities in Isaan, but it's still great value and cheaper than more touristy places like Bangkok.",
      },
      [internet]: {
        [verdict]: true,
        [description]: 'Good enough for video calls where I was staying.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          "There's a segmented lake that makes a route of almost 5.5km if you do the whole thing, and you can use the university running track.",
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          'A couple of vegan-friendly restaurants, but not enough to keep you satisfied for long.',
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "It's a very student-centric city and it feels it. A very relaxed vibe, although some unnecessarily aggressive soi dogs.",
      },
      [social]: {
        [verdict]: false,
        [description]:
          "There's actually a few foreigner-aimed bars in the city - more than in nearby bigger cities, but they're a bit dry.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          "It's a calm city and the traffic isn't overwhelming, so it's very comfortable to walk around.",
      },
    },
    [articlePath]: '/articles/buriram-for-digital-nomads',
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
          "Nice rooms are available for less than 900 baht per night, beers in a bar are typically around 80 baht although I found them as cheap as 50 baht, for a meal and drink in a western restaurant you'll pay around 250 to 300 baht.",
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'The city offers fast Internet, but not all rooms take advantage of it. Choose your room carefully.',
      },
      [running]: {
        [verdict]: false,
        [description]:
          "The beach is the only decent place I've found for running, but parts of it get blocked by the sea at high tide.",
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "It's not the worst city to be vegan, but there isn't an abundance of choice either. I find myself going to the same places repeatedly.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          'I feel entirely safe wandering around the streets in the middle of the night here.',
      },
      [social]: {
        [verdict]: false,
        [description]:
          "Huahin is a very easy place to go and sit in a bar by yourself and meet people, but in terms of organised events I didn't find anything here.",
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
    [articlePath]: '/articles/khon-kaen-for-digital-nomads',
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
        [description]:
          'No organised events with only one foreigner-aimed bar in town. There are a lot of craft beer bars, which are nice to have a beer by yourself.',
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
          "Both places I've stayed in Pattaya have had diabolical connections.",
      },
      [running]: {
        [verdict]: true,
        [description]:
          "Running to and along the beach I found to be a pretty pleasant route. You can run in most of Pattaya without issue once you're outside the city centre.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          'There are a couple of fully vegan restaurants here, with the many Indian and Middle-Eastern restaurants having vegan options.',
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "It's a city full of drunk people from all over the world. Bar fights definitely happen, but that's about it.",
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
    [articlePath]: '/articles/pattaya-for-digital-nomads',
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
    [place]: places[countries.northMacedonia].skopje,
    [country]: countries.northMacedonia,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          "The only place I've been that's cheaper than South-East Asia. Perhaps the cheapest capital city in Europe.",
      },
      [internet]: {
        [verdict]: true,
        [description]:
          "The Internet's not lightning fast, but it's fast enough to comfortably work on, including video calls.",
      },
      [running]: {
        [verdict]: true,
        [description]:
          'The riverside and City Park are good places for flat runs, Vodno is good for trail running.',
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "There are a couple of vegan restaurant, but variety is lacking. The supermarkets aren't very vegan-friendly.",
      },
      [safe]: {
        [verdict]: true,
        [description]: 'I sensed no safety concerns during my five weeks here.',
      },
      [social]: {
        [verdict]: false,
        [description]:
          "There's a tame meetup that takes place every Sunday night at a cafe, other than that it's limited to irregular events.",
      },
      [walking]: {
        [verdict]: true,
        [description]: 'Very easy and comfortable to walk all over the city.',
      },
    },
    [articlePath]: '/articles/skopje-for-digital-nomads',
  },
  {
    [place]: places[countries.bulgaria].sofia,
    [country]: countries.bulgaria,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          'I paid around 60 lev per night for my first room here, a local beer will cost around 5 lev in a bar, expect to pay about 20 lev for a meal with a drink in a western restaurant.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'Fast enough and reliable enough to comfortably work from.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          'Three parks that are very suitable for running, apart from all the people smoking.',
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "Minimal restaurant options and the supermarkets don't really cater to vegans.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "Not so much as an inkling of feeling unsafe while I've been here.",
      },
      [social]: {
        [verdict]: false,
        [description]: 'Not much going on in terms of organised events.',
      },
      [walking]: {
        [verdict]: true,
        [description]:
          "Really beautiful streets in the old town, but the whole city's very walkable.",
      },
    },
    [articlePath]: '/articles/sofia-for-digital-nomads',
  },
  {
    [place]: places[countries.taiwan].taipei,
    [country]: countries.taiwan,
    [criteria]: {
      [affordable]: {
        [verdict]: false,
        [description]:
          'More expensive than Eastern Europe and South-East Asia, particularly for accommodation, expect to pay upwards of NT$1,800 per night for a decent room, around NT$250 for a meal in a nice restaurant, and NT$200 for a large local beer.',
      },
      [internet]: {
        [verdict]: true,
        [description]:
          'No connection issues at all during my time. My first room had consistent download speeds and upload speeds of around 250mbps and 130mbps respectively, while my second room was closer to 60mbps and 30mbps. 4G is equally fast the city over.',
      },
      [running]: {
        [verdict]: true,
        [description]:
          "The roads aren't good for running given how long it can take to cross them, but there are several running tracks through the city, and the riverside is perfect for long runs.",
      },
      [veganFood]: {
        [verdict]: true,
        [description]:
          "Many vegan and vegan-friendly restaurants all over the city. Local places are easier if you're with someone that speaks Chinese, but even if you're not it's an easy city to be vegan.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "Drivers here are passive and law-obiding, so the roads are safe, and I don't know if crime exists here. You can leave your wallet on a table and it'll still be there when you get back.",
      },
      [social]: {
        [verdict]: true,
        [description]:
          "It's not a big drinking city, but there are many Meetups for things like hiking and fitness (as well as a small number for drinking).",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          'Wide, clear pavements, clean air, Taipei is a great city to expore on foot. The only frustration is how long it can take to cross the road.',
      },
    },
    [articlePath]: '/articles/taipei-for-digital-nomads',
  },
  {
    [place]: places[countries.thailand].ubonRatchathani,
    [country]: countries.thailand,
    [criteria]: {
      [affordable]: {
        [verdict]: true,
        [description]:
          "Perhaps the cheapest place I've stayed in Thailand, which is really saying something. My hotel was just over 550 baht per night, rice with one topping starts at 15 baht in one of the vegan restaurants, a bottle of Leo is just 65 baht in the one foreigner bar (normal price, not happy hour).",
      },
      [internet]: {
        [verdict]: true,
        [description]:
          "Didn't have any connection issues during my stay. 210mbps download speed, 215mbps upload speed in my room.",
      },
      [running]: {
        [verdict]: true,
        [description]:
          'Even in a state of reconstruction, Huai Wang Nong lake is a great place to run, and there are other options.',
      },
      [veganFood]: {
        [verdict]: false,
        [description]:
          "A small number of vegan-friendly restaurants, but not enough that you aren't going back to the same ones again and again.",
      },
      [safe]: {
        [verdict]: true,
        [description]:
          "It's a very, calm, friendly place where people say hello to you on the street. I had no sense of crime being a thing here during my stay.",
      },
      [social]: {
        [verdict]: false,
        [description]:
          "There's one foreigner-aimed bar in town, there are a couple of craft beer bars, and some other places dotted around the city, but it's a little uninspiring.",
      },
      [walking]: {
        [verdict]: true,
        [description]:
          "A very easy city to walk around. The traffic doesn't move very quickly.",
      },
    },
    [articlePath]: '/articles/ubon-ratchathani-for-digital-nomads',
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
