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
                className="aspect-square -rotate-2 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              About Slowmadding
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              {/* TODO: Make these more prominent */}
              <p>"Travel broadens the mind"</p>
              <p>"To travel is to live"</p>
              <p>"Travel is the only thing you buy that makes you richer"</p>

              <p>
                This is some of the stupid shit that people who've never been
                anywhere say on Instagram.
              </p>

              <p>
                Travel is fun. It allows you to meet a lot of people. It allows
                you to spend your time in less financially demanding places. And
                it's suitable for people who just aren't wired to stay still.
              </p>

              <p>
                A nomadic lifestyle stifles your instinctive ability to slump
                into an irrelevant routine, then act irrationally to prevent
                that routine getting disrupted. When you don't stay anywhere
                long enough to [grow roots], then you don't...
              </p>

              <p>It's a lifestyle for people who are scared to</p>

              {/* <p>
                That's just a fancy way of saying I'm not grown up enough to
                settle down and start being an adult yet, but that I'm too lazy
                to travel properly, so spend several weeks or even months
                staying everywhere I go.
              </p>
              <p>
                I work as a freelance software engineer, so I can earn a living
                from anywhere with an Internet connection. I'm a big believer in
                not working too much, and have found that I can work two days
                per week and still save money, so I don't really do any more.
              </p>
              <p>
                I'm also vegan, I run, I don't have many friends, I'm scared of
                commitment, I'm British with German citizenship (thanks Brexit),
                I do yoga sometimes, and I hate people that walk slowly. Or that
                walk the same speed as me, but one metre behind.
              </p>
              <p>
                If you're not the same as at least one of these, then you're
                probably not going to find much useful on this app. If you are
                the same, you're still not going to find much useful on this
                app.
              </p>
              <p>
                I built it to write occasional articles about useful things I
                discover on my travels, so that I can pass on my wisdom and tell
                myself that I'm doing some good in the world.
              </p>
              <p>
                This isn't a backpacking blog. I've paid my dues as a
                backpacker, with years of staying in hostel dorms, Couchsurfing
                before the perverts ruined it, camping at the side of the road,
                and even sleeping under the stars occasionally, which is another
                way of saying I slept rough because I was too cheap to pay for a
                hostel.
              </p>
              <p>
                I cherish those days, but they are long behind me. As a digital
                nomad, I don't need to save every penny that I can because I'm
                making money as I travel. If you're looking for advice on the
                cheapest way to do things, this isn't the place for you.
              </p>
              <p>
                I'm also someone who has little interest in tourist sites. I
                derive a lot more enjoyment from just going to places and
                existing. Interacting with locals, or sometimes just people
                watching. Just becoming comfortable in the places that I go.
                That is how I experience the world, so don't come here looking
                for reviews of Machu Picchu or Angkor Wat.
              </p>
              <p>
                I take very few photos, and even fewer selfies (if I want to
                know what I look like, I'll look in the mirror). So nor will
                this be a place for tips on places to go for the most Instagram
                likes. My motivation for nomadding is more simple: Routines are
                a dangerous thing.
              </p>
              <p>
                I find that if I stay in the same place too long, I become
                obsessed with my routine. My world becomes very small, and I
                care about things that, once I take a step back and look at them
                from a distance, I realise are entirely insignificant.
              </p>
              <p>
                When I lived in Bangkok, I used to take the underground to work
                everyday. I lived near to a quiet station, and I would travel to
                work at a quiet time of day. As such, it wasn't uncommon for me
                to have the entire platform to myself.
              </p>
              <p>
                I would work six days per week, and would get so obsessed with
                my own world, that I had a spot on the platform, right
                underneath the air conditioner, that I would stand everyday. If
                I came into the station and someone was standing in my spot on
                the platform, it would ruin my day. That's what I mean when I
                say I become too obsessed with my routine and care about
                insignificant things.
              </p>
              <p>
                So on the one hand, I want to be a nomad so that I'm continually
                moving around, and I don't have the opportunity for my world to
                become so small that I care about things that don't matter, but
                on the other, backpacking, and moving from hostel to hostel
                every two or three days can be just as stressful. At that point,
                you crave a routine. You dream of being settled down and having
                a nine-to-five job, and to live in a place that you can call
                home. My personality matches that lifestyle no more than it
                matches being settled and doing the same thing everyday.
              </p>
              <p>
                Nomadding is my attempt to find the perfect middle-ground.
                Having weeks or months everywhere I go means that I'm not moving
                around so much that I long for continuity and routine, but that
                I don't stay in each place long enough to build-up such a
                routine that I start to care about things that really don't
                matter.
              </p>
              <p>
                It is my attempt to find the perfect balance between routine and
                adventure.
              </p> */}
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
