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
              className={`h-full w-auto${
                index === imageIndex ? '' : ' hidden'
              }`}
            />
          ))}
        </div>
      </div>

      <nav
        className="not-prose flex items-center justify-center"
        aria-label="Progress"
      >
        <ol role="list" className="flex list-none items-center space-x-5">
          {images.map((image, index) => (
            <li key={image.src.src}>
              {imageIndex === index ? (
                <div
                  className="relative flex items-center justify-center"
                  aria-current="step"
                >
                  <span
                    className="absolute flex h-4 w-4 p-px"
                    aria-hidden="true"
                  >
                    <span className="h-full w-full rounded-full bg-zinc-600 dark:bg-zinc-400" />
                  </span>
                  <span
                    className="relative block h-2.5 w-2.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
                    aria-hidden="true"
                  />
                  {/* <span className="sr-only">{step.name}</span> */}
                </div>
              ) : (
                <div className="block h-2.5 w-2.5 rounded-full bg-zinc-400 hover:bg-zinc-600 dark:bg-zinc-500 hover:dark:bg-zinc-400">
                  {/* <span className="sr-only">{step.name}</span> */}
                </div>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <LinkWrapper url={images[imageIndex].url}>
        <p className="text-center">{images[imageIndex].caption}</p>
      </LinkWrapper>
    </>
  )
}

export default ImageGallery
