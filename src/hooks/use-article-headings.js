import arrayOfNumbers from 'array-of-numbers'

const useArticleHeadings = () => {
  const articleHeadings = (articleString) => {
    const returnObject = {}

    const headingElements = (number) =>
      articleString.match(new RegExp(`<h${number}(.*?)<\/h${number}>`, 'gi'))

    const extractHeadings = (headingElement) =>
      headingElement.replace(/(<([^>]+)>)/gi, '')

    arrayOfNumbers(2, 3).map((number) => {
      returnObject[`h${number}Headings`] =
        (headingElements(number) &&
          headingElements(number).map((headingElement) =>
            extractHeadings(headingElement)
          )) ||
        []
    })

    return returnObject

    // The goal of this hook is to return article headings in two possible formats: Chronological order (as they appear in the article), and importance order (h1 first, h2s second, h3s third etc)
    // This should be determined by an argument
  }

  return articleHeadings
}

export default useArticleHeadings
