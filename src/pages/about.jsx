// TODO: Add redirect from Timeline page to here to keep Google happy? Or on the other hand, fuck Google.

import Head from 'next/head'

import { parsedTimelineData } from '@/lib/timelineData'

import { Container } from '@/components/Container'
import Timeline from '@/components/Timeline'
import BackToTopLink from '@/components/BackToTopLink'
import Link from 'next/link'

const imagePath = '/images/about'

const digitalNomad = 'Digital nomad'

const startDate = 'Start date'
const endDate = 'End date'

const timelineDates = {
  [digitalNomad]: {
    [startDate]: '2022-10-07',
    [endDate]: null,
  },
}

const About = ({ timelines }) => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="All about slowmadding.com" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex lg:flex-col lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <img
                src={`${imagePath}/archery-in-wulai.jpeg`}
                alt="Archery in Wulai"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div className="hidden max-w-xs px-2.5 md:block lg:max-w-none">
              <img
                src={`${imagePath}/philopappos-hill-selfie.jpeg`}
                alt="Philopappos Hill selfie"
                className="aspect-square -rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div className="hidden max-w-xs px-2.5 lg:block lg:max-w-none">
              <img
                src={`${imagePath}/rowing-in-wulai.jpeg`}
                alt="Rowing in Wulai"
                className="aspect-square rotate-1 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div className="hidden max-w-xs px-2.5 lg:block lg:max-w-none">
              <img
                src={`${imagePath}/outside-gaziview.jpeg`}
                alt="Outside Gaziview"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div className="hidden max-w-xs px-2.5 lg:block lg:max-w-none">
              <img
                src={`${imagePath}/tingtao-cafe-cat.jpeg`}
                alt="Tingtao Cafe cat"
                className="aspect-square -rotate-6 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div className="hidden max-w-xs px-2.5 lg:block lg:max-w-none">
              <img
                src={`${imagePath}/qingtiangang-grassland.jpeg`}
                alt="Qingtiangang Grassland"
                className="aspect-square rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div className="hidden max-w-xs px-2.5 lg:block lg:max-w-none">
              <img
                src={`${imagePath}/maao-bay.jpeg`}
                alt="Maao Bay"
                className="aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
            <div className="hidden max-w-xs px-2.5 lg:block lg:max-w-none">
              <img
                src={`${imagePath}/yun-hsien-resort.jpeg`}
                alt="Yun Hsien Resort"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              About Slowmadding
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p className="font-bold">"Travel broadens the mind"</p>
              <p className="font-bold">"To travel is to live"</p>
              <p className="font-bold">
                "Travel is the only thing you buy that makes you richer"
              </p>

              <p>
                This is just some of the stupid shit that people who've never
                been anywhere say on Instagram.
              </p>

              <p>
                Travel is fun. It allows you to meet a lot of people. It lets
                you to spend your time in less financially demanding places. It
                enables you to stay in climates you're suited to. And it's
                suitable for people who just aren't wired to stay still.
              </p>

              <p>
                A nomadic lifestyle stifles your instinctive ability to slump
                into an irrelevant routine, then act irrationally to prevent
                that routine getting disrupted.
              </p>

              <p>
                That in a nutshell, is why I'm a digtial nomad. It's a lifestyle
                for people scared of commitment to any place, person or way of
                being, because when you're a nomad and you don't like how things
                are going, you don't have to face the reality of trying to make
                the best of it, you just leave.
              </p>

              <p>
                You could term it as a coward's lifestyle, and you'd perhaps be
                right to do so, but in today's polarised world so much is out of
                the control of any individual that being ready, willing and able
                to change location at a moment's notice could also be viewed as
                the ultimate acceptance of reality.
              </p>

              <p>
                Yet let's not ignore the biggest motivator. Living the life of
                an affluent nomad, going where you please, to whatever climate
                you choose and to the people you feel like surrounding yourself
                with - it's fun. It's a fun way to spend your finite time on
                earth.
              </p>

              <p>
                Long before I was a digital nomad, I went on a backpacking trip
                that lasted arguably more than ten years. Whether you include
                the time I was settled and teaching English abroad as part of
                the same trip is debatable. The motivation for that trip though,
                which started right after my graduation from university, was
                that there's a big world out there, and I don't want to spend
                the next forty years of my short life sitting in an office in
                London. So I left.
              </p>

              <p>
                With very little money in my pocket I went to cheap countries
                and learned to exist on the bare minimum, going to richer places
                with higher salaries when I needed to top it up.
              </p>

              <p>
                Ten years later, still abroad but a little older and a little
                wiser, I accepted that while still enjoying the lifestyle, there
                was no future and no retirement in just making what I needed to
                get by each month. So I asked myself, how exactly can I build my
                perfect life?
              </p>

              <p>
                I've never been a believer in hard work. You do it when you have
                to, but if the opportunity is there to earn more money for less
                work, then you take it every time. If I can get by on four, or
                three, or even two days work per week, then why work for five?
                Life is too short and there is no pride in working hard for no
                reason. I want to enjoy my time, not spend it working.
              </p>

              <p>
                The other side of that, is if I can reduce how much I spend,
                then I won't need to earn so much to begin with.
              </p>

              <p>
                Ten years backpacking hadn't satiated my hunger to go to
                different places. Looking forward to a two-week vacation every
                year just wasn't going to cut it for me. And in living in
                Thailand while teaching English, I'd learned how much happier I
                am in warmer climates.
              </p>

              <p>
                So I wanted a life that allowed me to earn the most money for
                the least work, with the freedom to do it from the cheapest
                places and the best climates.
              </p>

              <p>
                At this point, aged around 32, I'd never written a line of code
                in my life. Yet when I pondered this riddle, software
                development is an industry known for high salaries and remote
                work. And so just like that (it took a bit longer) I decided:
                I'm going to be a software developer.
              </p>

              <p>
                At that point I'd describe myself as a motivated idiot, but
                sometimes motivation is all you need.
              </p>

              <p>
                To cut a long and painful story very short, I learned to code,
                moved back to London and worked as a software developer at a
                couple of start-ups for three years until I had the experience I
                needed to go it alone and start freelancing. Within a matter of
                days I had my first, and to this point only client, who needed
                me to work for two days per week, earning me enough that, from
                the right places in the world, I could live comfortably and even
                save a little on the side.
              </p>

              <p>
                So I gave up my flat in London, booked a flight to Thailand, and
                in the time since I haven't looked back.
              </p>

              <p>
                I'm yet to go anywhere I've had to wear more than a t-shirt and
                shorts. And with the blessing of being a dual-national with two
                of the best passports you can have for travelling, it took four
                very hard and stressful years, but I turned my dream into a
                reality.
              </p>

              <p>
                I now work two days per week, and live very comfortably doing
                so, even saving a bit for my eventual retirement. I scoff at the
                idea of ever again working more. I have the ultimate freedom to
                travel anywhere in the world I want to at a moment's notice, and
                I live a sometimes lonely, but ultimately fun and rewarding
                lifestyle
              </p>

              <p>
                Slowmadding, this website, is one of my hobby projects for my
                five-day weekends. Partly it's a place that I can write code.
                Partly it's a way to pass on what I've learned to people that
                live, or that want to live a similar lifestyle. And partly it's
                just a record for my own sake - something to look back on about
                the places I've been.
              </p>

              <p>
                Hopefully if you've made it here, then it gives some value to
                you. Ultimately all I'll say, is make sure to forge your own
                path. I built my life this way because it's the way that I want
                to live, but don't try and copy it. You have to find what you
                want to do.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* TODO: Do you want a title for the timeline? */}
      {/* TODO: Does it need any intro text? */}
      <Timeline
        timelines={timelines}
        defaultTimeline={digitalNomad}
        mainPageFeature={false}
      />

      <Container className="mt-16 sm:mt-32">
        <div className="flex justify-center">
          <Link
            href="/trips"
            className="cursor-pointer text-center font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
          >
            Take a look at some of the trips I took before becoming a digital
            nomad
          </Link>
        </div>
        <BackToTopLink />
      </Container>
    </>
  )
}

export default About

export async function getStaticProps() {
  let timelineDetails = {}

  Object.keys(timelineDates).map((timelineName) => {
    timelineDetails[timelineName] = {
      timelineData: parsedTimelineData(
        timelineDates[timelineName][startDate],
        timelineDates[timelineName][endDate]
      ),
    }
  })

  return {
    props: {
      timelines: timelineDetails,
    },
  }
}
