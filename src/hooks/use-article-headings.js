const useArticleHeadings = () => {
  const articleHeadings = (articleString, chronological = false) => {
    let returnVariable

    const headingElements = () =>
      articleString.match(new RegExp(`<h(.*?)<\/h(.)>`, 'gi'))

    const headingLevel = (headingElement) => headingElement.split('<h')[1][0]

    const extractHeading = (headingElement) =>
      headingElement.replace(/(<([^>]+)>)/gi, '')

    const extractId = (headingElement) => {
      let match = headingElement.match(/id=\"(.*?)\"/)

      return match ? match[1] : null
    }

    const buildChronologicalArray = () => {
      returnVariable = []
      headingElements().map((headingElement) => {
        returnVariable.push({
          headingLevel: `h${headingLevel(headingElement)}`,
          headingText: extractHeading(headingElement),
          headingId: extractId(headingElement),
        })
      })
    }

    const buildImportanceObject = () => {
      returnVariable = {}
      headingElements().map((headingElement) => {
        if (`h${headingLevel(headingElement)}Headings` in returnVariable) {
          returnVariable[`h${headingLevel(headingElement)}Headings`].push(
            extractHeading(headingElement)
          )
        } else {
          returnVariable[`h${headingLevel(headingElement)}Headings`] = [
            extractHeading(headingElement),
          ]
        }
      })
    }

    chronological ? buildChronologicalArray() : buildImportanceObject()

    return returnVariable
  }

  return articleHeadings
}

export default useArticleHeadings
