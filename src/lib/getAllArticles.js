import glob from 'fast-glob'
import * as path from 'path'

const importArticle = async (articleFilename, pathOnly = false) => {
  const { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  const url = `/articles/${articleFilename.replace(/(\/index)?\.mdx$/, '')}`

  if (pathOnly) return url

  return {
    url: url,
    ...meta,
    component,
  }
}

const fetchArticleFilenames = async () =>
  await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/pages/articles'),
  })

export const getAllArticles = async () => {
  const articleFilenames = await fetchArticleFilenames()

  const articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
}

export const getAllArticlePaths = async () => {
  const articleFilenames = await fetchArticleFilenames()

  const articlePaths = await Promise.all(
    articleFilenames.map((filename) => importArticle(filename, true))
  )

  return articlePaths
}
