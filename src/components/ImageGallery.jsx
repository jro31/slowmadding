// FIXME: There's a momentary flash of an incorrectly sized image when switching between images of different sizes
// No idea what's causing it, but try adding transitions when scrolling between images. They'd be nice to have anyway, and could fix it.

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import useScreenWidth from '@/hooks/use-screen-width'
import { useEffect } from 'react'

const ImageGallery = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0)
  const [galleryHeight, setGalleryHeight] = useState()
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

  useEffect(() => {
    const calculateGalleryHeight = () => {
      if (screenWidth < 640) {
        if (galleryHeight === 257) return

        setGalleryHeight(257) // h-[257px]
      } else if (screenWidth < 768) {
        if (galleryHeight === 384) return

        setGalleryHeight(384) // h-[384px]
      } else if (screenWidth < 1024) {
        if (galleryHeight === 480) return

        setGalleryHeight(480) // h-[480px]
      } else {
        if (galleryHeight === 504) return

        setGalleryHeight(504) // h-[504px]
      }
    }

    calculateGalleryHeight()
  }, [imageIndex, screenWidth, galleryHeight])

  return (
    <>
      <div className={`relative h-[${galleryHeight}px]`}>
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
            height={galleryHeight}
            unoptimized
          />
        </div>
      </div>
      <p className="text-center">{images[imageIndex].caption}</p>
    </>
  )
}

export default ImageGallery
