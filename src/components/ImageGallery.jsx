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
    <>
      <div className="relative">
        <div className="absolute flex h-full w-full justify-between">
          <div
            onClick={() => updateImageIndex('left')}
            className="flex basis-1/2 items-center"
          >
            <ChevronLeftIcon className="h-24 w-24" />
          </div>
          <div
            onClick={() => updateImageIndex('right')}
            className="flex basis-1/2 items-center justify-end"
          >
            <ChevronRightIcon className="h-24 w-24" />
          </div>
        </div>
        <div>
          <Image
            src={images[imageIndex].src}
            alt={images[imageIndex].alt}
            unoptimized
          />
        </div>
      </div>
      <p className="text-center">{images[imageIndex].caption}</p>
    </>
  )
}

export default ImageGallery
