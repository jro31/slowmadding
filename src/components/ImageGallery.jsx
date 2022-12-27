import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import useScreenWidth from '@/hooks/use-screen-width'

const ImageGallery = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const screenWidth = useScreenWidth()

  const firstImageIsShown = () => imageIndex <= 0
  const lastImageIsShown = () => imageIndex >= images.length - 1

  const updateImageIndex = (direction) => {
    if (direction === 'left' && firstImageIsShown()) return
    if (direction === 'right' && lastImageIsShown()) return

    setImageIndex(
      (prevImageIndex) => prevImageIndex + (direction === 'right' ? 1 : -1)
    )
  }

  const galleryHeight = () => {
    if (screenWidth < 640) {
      return 257 // h-[257px]
    } else if (screenWidth < 768) {
      return 384 // h-[384px]
    } else if (screenWidth < 1024) {
      return 480 // h-[480px]
    } else {
      return 504 // h-[504px]
    }
  }

  return (
    <>
      <div className={`relative h-[${galleryHeight()}px]`}>
        <div className="absolute flex h-full w-full justify-between">
          {!firstImageIsShown() && (
            <div
              onClick={() => updateImageIndex('left')}
              className="flex basis-1/2 items-center"
            >
              <ChevronLeftIcon className="h-24 w-24" />
            </div>
          )}
          {!lastImageIsShown() && (
            <div
              onClick={() => updateImageIndex('right')}
              className="flex grow basis-1/2 items-center justify-end"
            >
              <ChevronRightIcon className="h-24 w-24" />
            </div>
          )}
        </div>
        <div className="flex h-full items-center justify-center">
          <Image
            src={images[imageIndex].src}
            alt={images[imageIndex].alt}
            height={galleryHeight()}
            unoptimized
          />
        </div>
      </div>
      <p className="text-center">{images[imageIndex].caption}</p>
    </>
  )
}

export default ImageGallery
