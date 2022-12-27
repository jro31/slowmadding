import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

// TODO: The chevron should only display if an image is available to the left/right

const ImageGallery = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0)

  const updateImageIndex = (direction) => {
    if (direction === 'left' && imageIndex <= 0) return
    if (direction === 'right' && imageIndex >= images.length - 1) return

    setImageIndex(
      (prevImageIndex) => prevImageIndex + (direction === 'right' ? 1 : -1)
    )
  }

  console.log(imageIndex)

  return (
    <div>
      <ChevronLeftIcon
        className="h-24 w-24"
        onClick={() => updateImageIndex('left')}
      />
      <ChevronRightIcon
        className="h-24 w-24"
        onClick={() => updateImageIndex('right')}
      />
      <Image
        src={images[imageIndex].src}
        alt={images[imageIndex].alt}
        unoptimized
      />
      <p className="text-center">{images[imageIndex].caption}</p>
    </div>
  )
}

export default ImageGallery
