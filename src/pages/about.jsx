import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

const Heading = "I'm Jethro. I'm a slowmad."

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
        <title>About - Spencer Sharp</title>
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
                settle down and start being an adult yet, but that I'm too lazy
                to travel properly, so spend several weeks or even months
                staying everywhere I go.
              </p>
              <p>
                I work as a freelance software engineer, so I can earn a living
                from anywhere with an Internet connection.
              </p>
              <p>
                I'm a big believer in not working too much, and have found that
                I can work two days per week, and still save money, so I don't
                really do any more.
              </p>
              <p>
                I'm also vegan, I run, I don't have many friends, I'm scared of
                commitment, I'm British with German citizenship (thanks Brexit),
                I do yoga sometimes, and I hate people that smell bad. And that
                walk slowly. Or that walk the same speed as me, but one metre
                behind.
              </p>
              <p>
                If you're not the same as at least one of these, then you're
                probably not going to find much useful on this app. Even if you
                are the same, you might not going to find much useful on this
                app.
              </p>
              <p>
                I built this app to write occasional articles about useful
                things I discovered on my travels, so that I can pass on my
                wisdom and tell myself that I'm giving back.
              </p>
              <p>
                This isn't a backpacking blog. I've spent more than my share of
                time living out of a backpack, staying in hostel dorms,
                Couchsurfing before the perverts ruined it, camping at the side
                of the road, and even sleeping under the stars occasionally.
                Which is just a fancy way of saying I slept rough because I was
                too cheap to pay for a hostel.
              </p>
              <p>
                I cherish those days, but they are long behind me. As a digital
                nomad, I don't need to save every penny that I can anymore,
                because I'm making money as I travel. If you're looking for
                advice on the cheapest way to do things, this probably isn't the
                app for you.
              </p>
              <p>
                You can also follow me on the socials. I probably won't post
                anything, and I'll probably ignore you if you message me, but
                you never know. Give it a shot.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                spencer@planetaria.tech
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}

export default About
