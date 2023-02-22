import { useEffect, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import useScreenWidth from '@/hooks/use-screen-width'
import LinkWrapper from './LinkWrapper'

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
        <div
          className={`absolute flex h-full w-full ${
            firstImageIsShown() ? 'justify-end' : 'justify-between'
          }`}
        >
          {!firstImageIsShown() && (
            <div
              onClick={() => updateImageIndex('left')}
              className="flex basis-1/2 cursor-pointer items-center"
            >
              <ChevronLeftIcon className="h-24 w-24" />
            </div>
          )}
          {!lastImageIsShown() && (
            <div
              onClick={() => updateImageIndex('right')}
              className="flex basis-1/2 cursor-pointer items-center justify-end"
            >
              <ChevronRightIcon className="h-24 w-24" />
            </div>
          )}
        </div>
        <div className="flex h-full items-center justify-center">
          {images.map((image, index) => (
            <img
              key={image.src.src}
              src={image.src.src}
              alt={image.alt}
              className={`h-full${index === imageIndex ? '' : ' hidden'}`}
            />
          ))}
        </div>
      </div>
      <LinkWrapper url={images[imageIndex].url}>
        <p className="text-center">{images[imageIndex].caption}</p>
      </LinkWrapper>
    </>
  )
}

export default ImageGallery
