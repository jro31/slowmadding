const ExternalLink = ({ url, children, className }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  )
}

export default ExternalLink
