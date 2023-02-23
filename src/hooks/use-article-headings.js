const useArticleHeadings = () => {
  const h2Regex = /<h2(.*?)<\/h2>/g

  const articleHeadings = (articleString) => {
    console.log(articleString.match(h2Regex))

    // The goal of this hook is to return article headings in two possible formats: Chronological order (as they appear in the article), and importance order (h1 first, h2s second, h3s third etc)
    // This should be determined by an argument
  }

  return articleHeadings
}

export default useArticleHeadings
