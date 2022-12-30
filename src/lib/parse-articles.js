import { getAllArticles } from './getAllArticles'
import { formatDateTime } from './formatDate'

const parseArticles = async () => {
  const articles = (await getAllArticles()).map(
    ({ component, ...meta }) => meta
  )

  const parsedArticles = articles.map((article) => {
    return {
      dateTime: formatDateTime(article.date),
      title: article.title,
      text: article.description,
      media: article.coverImage
        ? {
            type: 'nextImage',
            src: article.coverImage.image,
            alt: article.coverImage.alt,
          }
        : null,
      url: `articles/${article.slug}`,
      platform: 'slowmadding',
    }
  })

  return parsedArticles
}

export default parseArticles
