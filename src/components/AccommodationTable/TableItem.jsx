import LinkWrapper from '../LinkWrapper'

const TableItem = ({ heading, content, url }) => {
  return (
    <div className="mb-2 flex flex-col sm:flex-row sm:gap-3">
      <div className="shrink grow basis-1/5 font-bold">{heading}:</div>
      <div className="shrink grow basis-3/5">
        <LinkWrapper url={url}>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </LinkWrapper>
      </div>
    </div>
  )
}

export default TableItem
