import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import portraitImage from './portrait.jpg'

const Heading = "I'm Jethro. I'm a digital nomad."

const SocialLink = ({ className, href, children, icon: Icon }) => {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

const MailIcon = (props) => {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

const About = () => {
  return (
    <>
      <Head>
        <title>About - Jethro Williams</title>
        <meta name="description" content={Heading} />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {Heading}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                That's just a fancy way of saying I'm not grown up enough to
                settle down and start being an adult yet, and that I'm too lazy
                to travel properly, so spend several weeks or even months
                staying everywhere I go.
              </p>
              <p>
                I work as a freelance software engineer, so I can earn a living
                from anywhere with an Internet connection. I'm a big believer in
                not working too much, and have found that I can work two days
                per week, and still save money, so I don't really do any more.
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
                This isn't a backpacking blog. I've spent more than my share of
                time living out of a backpack, staying in hostel dorms,
                Couchsurfing before the perverts ruined it, camping at the side
                of the road, and even sleeping under the stars occasionally,
                which is another way of saying I slept rough because I was too
                cheap to pay for a hostel.
              </p>
              <p>
                I cherish those days, but they are long behind me. As a digital
                nomad, I don't need to save every penny that I can, because I'm
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
                obsessed with my routine. My world can become very small, and I
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
                the platform, it would ruin my day.
              </p>
              <p>
                That's what I mean when I say I would become too obsessed with
                my routine and would care about insignificant things.
              </p>
              <p>
                So on the one hand, I want to be a nomad so that I'm continually
                moving around, and I don't have the opportunity for my world to
                become so small that I care about insignificant things. But on
                the other hand, backpacking, and moving from hostel to hostel
                every two or three days, can be just as stressful.
              </p>
              <p>
                At that point, you crave a routine. You dream of being settled
                down and having a nine-to-five job, and to live in a place that
                you can call home.
              </p>
              <p>
                My personality matches that lifestyle no more than it matches
                being settled and doing the same thing everyday.
              </p>
              <p>
                Nomadding is my attempt to find the perfect middle-ground.
                Having weeks or months everywhere I go means that I'm not moving
                around so much that I long for continuity and routine, but at
                the same time, I don't stay in each place long enough to
                build-up such a routine that I start to care about things that
                really don't matter.
              </p>
              <p>
                It is my attempt to find the perfect balance between routine and
                adventure.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="mailto:contact@slowmadding.com" icon={MailIcon}>
                contact@slowmadding.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default About
