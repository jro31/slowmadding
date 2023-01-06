import ExternalLink from './ExternalLink'

const LinkWrapper = ({ children, url = null }) => {
  return (
    <>
      {url && <ExternalLink url={url}>{children}</ExternalLink>}
      {!url && children}
    </>
  )
}

export default LinkWrapper
