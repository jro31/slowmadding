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

  const ParsedContent = () => {
    if (typeof content === 'string') return content
    if (typeof content === 'object') {
      return Object.entries(content).map((entry) => (
        <div key={entry[0]} className="flex">
          <p>{entry[0]}:&#160;</p>
          <p>{entry[1]}</p>
        </div>
      ))
    }
  }

  return (
    <div className="flex gap-3">
      <div className="font-bold">{heading}</div>
      <div>
        <ExternalLink>
          <ParsedContent />
        </ExternalLink>
      </div>
    </div>
  )
}

export default TableItem
