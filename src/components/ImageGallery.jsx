// TODO: Add swipe to change images on mobile
// TODO: Add transitions to both image swipes and 'step' dots
// TODO: Handle if there are so many images that the step dots are wider than the article
// TODO: Remove chevrons from images (or replace them with something more sightly)

import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

import useScreenWidth from '@/hooks/use-screen-width'
import LinkWrapper from './LinkWrapper'

let nextImageIndex

const ImageGallery = ({ images }) => {
  const imageRefs = useRef(images.map(() => React.createRef()))
  const [imageIndex, setImageIndex] = useState(0)
  const [galleryHeight, setGalleryHeight] = useState()
  const screenWidth = useScreenWidth()

  const firstImageIsShown = () => imageIndex <= 0
  const lastImageIsShown = () => imageIndex >= images.length - 1

  const scrollImages = (direction) => {
    if (direction === 'left' && firstImageIsShown()) return
    if (direction === 'right' && lastImageIsShown()) return

    handleImageChange(direction === 'right' ? imageIndex + 1 : imageIndex - 1)
  }

  const handleImageChange = (newImageIndex) => {
    nextImageIndex = newImageIndex
    setImageIndex(null)
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
      <div
        className={`relative select-none h-[${galleryHeight}px]${
          images.length > 1 ? ' mb-0' : ''
        }`}
      >
        <div
          className={`absolute flex h-full w-full ${
            firstImageIsShown() ? 'justify-end' : 'justify-between'
          }`}
        >
          {!firstImageIsShown() && (
            <div
              onClick={() => scrollImages('left')}
              className="flex basis-1/2 cursor-pointer items-center"
            >
              <ChevronLeftIcon className="h-24 w-24" />
            </div>
          )}
          {!lastImageIsShown() && (
            <div
              onClick={() => scrollImages('right')}
              className="flex basis-1/2 cursor-pointer items-center justify-end"
            >
              <ChevronRightIcon className="h-24 w-24" />
            </div>
          )}
        </div>

        <div className="flex h-full items-center justify-center">
          {images.map((image, index) => (
            <CSSTransition
              in={index === imageIndex}
              key={image.src.src}
              nodeRef={imageRefs.current[index]}
              timeout={150}
              classNames={{
                enter: 'opacity-0',
                enterActive: 'opacity-100 transition-opacity',
                exit: 'opacity-100',
                exitActive: 'opacity-0 transition-opacity',
              }}
              unmountOnExit
              onExited={() => setImageIndex(nextImageIndex)}
            >
              <img
                ref={imageRefs.current[index]}
                src={image.src.src}
                alt={image.alt}
                className="h-full w-auto"
              />
            </CSSTransition>
          ))}
        </div>
      </div>

      {images.length > 1 && (
        <nav
          className="not-prose mt-3 flex items-center justify-center"
          aria-label="Progress"
        >
          <ol
            role="list"
            className="flex w-full list-none items-center justify-center"
          >
            {images.map((image, index) => (
              <li
                className="flex shrink grow-0 basis-5 justify-center"
                key={image.src.src}
              >
                {imageIndex === index ? (
                  <div
                    className="relative flex items-center justify-center"
                    aria-current="step"
                  >
                    <span
                      className="absolute flex h-4 w-4 p-px"
                      aria-hidden="true"
                    >
                      <span className="h-full w-full rounded-full bg-zinc-600 opacity-70 dark:bg-zinc-400 dark:opacity-90" />
                    </span>
                    <span
                      className="relative block h-2.5 w-2.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Image {index + 1} step</span>
                  </div>
                ) : (
                  <div
                    onClick={() => handleImageChange(index)}
                    className="block h-2.5 w-2.5 rounded-full bg-zinc-400 hover:bg-zinc-600 dark:bg-zinc-500 hover:dark:bg-zinc-400"
                  >
                    <span className="sr-only">Image {index + 1} step</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {images[imageIndex] && (
        <LinkWrapper url={images[imageIndex].url}>
          <p className="text-center">{images[imageIndex].caption}</p>
        </LinkWrapper>
      )}
    </>
  )
}

export default ImageGallery
