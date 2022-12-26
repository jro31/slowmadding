import TableItem from './TableItem'

const Description = ({ paragraphsArray }) => {
  const descriptionHtml = () =>
    `
      <div class='[&>p]:first:mt-0'>
        ${paragraphsArray.map((paragraph) => `<p>${paragraph}</p>`).join('')}
      </div>
    `

  return <TableItem heading="What I thought" content={descriptionHtml()} />
}

export default Description
