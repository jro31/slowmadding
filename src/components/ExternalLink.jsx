const ExternalLink = ({ url, children }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      {children}
    </a>
  )
}

export default ExternalLink
