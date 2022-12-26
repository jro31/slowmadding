const TableItem = ({ heading, content, url }) => {
  const ExternalLink = (props) => {
    return (
      <>
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            {props.children}
          </a>
        )}
        {!url && props.children}
      </>
    )
  }

  return (
    <div className="flex gap-3">
      <div className="font-bold">{heading}</div>
      <div>
        <ExternalLink>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </ExternalLink>
      </div>
    </div>
  )
}

export default TableItem
