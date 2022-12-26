import ExternalLink from '../ExternalLink'

const TableItem = ({ heading, content, url }) => {
  const LinkWrapper = (props) => {
    return (
      <>
        {url && <ExternalLink url={url}>{props.children}</ExternalLink>}
        {!url && props.children}
      </>
    )
  }

  return (
    <div className="mb-2 flex flex-col sm:flex-row sm:gap-3">
      <div className="shrink grow basis-1/5 font-bold">{heading}:</div>
      <div className="shrink grow basis-3/5">
        <LinkWrapper>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </LinkWrapper>
      </div>
    </div>
  )
}

export default TableItem
