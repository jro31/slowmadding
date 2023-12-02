import { MapIcon } from '@heroicons/react/24/outline'

import ExternalLink from './ExternalLink'

const MapLink = ({ name, url }) => {
  return (
    <ExternalLink url={url} className="flex items-center gap-1.5">
      <MapIcon className="inline-block h-5 w-5" />
      <div>{name}</div>
    </ExternalLink>
  )
}

export default MapLink
