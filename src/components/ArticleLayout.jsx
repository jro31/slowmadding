import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { renderToString } from 'react-dom/server'

import { Container } from '@/components/Container'
import { formatDate } from '@/lib/formatDate'
import { Prose } from '@/components/Prose'

import useArticleHeadings from '@/hooks/use-article-headings'
import BackToTopLink from './BackToTopLink'

const ArrowLeftIcon = (props) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const ArticleLayout = ({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) => {
  const articleHeadings = useArticleHeadings()

  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="author" content="Jethro Williams" />
        {meta.keywords && (
          <meta name="keywords" content={meta.keywords.join(', ')} />
        )}
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>

              {/* TODO: Nest headings beneath parents */}
              {/* TODO: Style properly */}
              <div className="mx-auto mt-6 max-w-xl">
                <ul className="rounded-2xl bg-white/90 p-6 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  <h3 className="mb-4 text-base font-semibold leading-7">
                    In this article
                  </h3>
                  {articleHeadings(renderToString(children), true).map(
                    (articleHeading) =>
                      articleHeading.headingId && (
                        <Link
                          key={`${articleHeading.headingId}-in-this-article-link`}
                          href={`#${articleHeading.headingId}`}
                        >
                          <li>{articleHeading.headingText}</li>
                        </Link>
                      )
                  )}
                </ul>
              </div>

              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
        <BackToTopLink />
      </Container>
    </>
  )
}

export default ArticleLayout
