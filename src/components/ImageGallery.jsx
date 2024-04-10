// TODO: Add swipe to change images on mobile
// TODO: Handle if there are so many images that the step dots are wider than the article
// TODO: Scrolling on the last image should take you back to the beginning
// TODO: Make it more clear that clicking on an image scrolls to the next one
// Probably add chevrons or arrows back in, but very subtle and only on hover
// If swiping works on mobile, there will be no need to display them on touch screen devices
// FIXME: Using React Transition Group means that only the first image in each gallery is available in the page source - fix so that all images can be seen by search engines
// Might require something hacky, such as stacking all images on top of each other and choosing which to display by controlling the opacity

import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import useScreenWidth from '@/hooks/use-screen-width'
import LinkWrapper from './LinkWrapper'

let previousImageIndex
// let nextImageIndex

const ImageGallery = ({ images }) => {
  const imageRefs = useRef(images.map(() => React.createRef()))
  const [imageIndex, setImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(0)
  // const [previousImageIndex, setPreviousImageIndex] = useState(0)
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
    previousImageIndex = imageIndex
    // setPreviousImageIndex(imageIndex)
    // nextImageIndex = newImageIndex
    setNextImageIndex(newImageIndex)
    setImageIndex(null)
  }

  const imageIsIn = (index) => {
    // return index === imageIndex || nextImageIndex > previousImageIndex ? index >= nextImageIndex :
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

  console.log('🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬🤬')
  console.log(imageIndex)
  console.log(nextImageIndex)

  return (
    <>
      <div
        className={`relative select-none h-[${galleryHeight}px]${
          images.length > 1 ? ' mb-0' : ''
        }`}
      >
        <div
          className={`absolute z-50 flex h-full w-full ${
            firstImageIsShown() ? 'justify-end' : 'justify-between'
          }`}
        >
          {!firstImageIsShown() && (
            <div
              onClick={() => scrollImages('left')}
              className="flex basis-1/2 cursor-pointer items-center"
            />
          )}
          {!lastImageIsShown() && (
            <div
              onClick={() => scrollImages('right')}
              className="flex basis-1/2 cursor-pointer items-center justify-end"
            />
          )}
        </div>

        <div className="flex h-full items-center justify-center">
          {images.map((image, index) => (
            <CSSTransition
              // in={imageIsIn(index)}
              in={index === imageIndex || index >= nextImageIndex}
              key={image.src.src}
              nodeRef={imageRefs.current[index]}
              timeout={150}
              classNames={{
                enter: 'opacity-0',
                enterActive: 'opacity-100',
                exit: 'opacity-100',
                exitActive: 'opacity-0',
              }}
              mountOnEnter
              unmountOnExit
              onEntered={() => setImageIndex(nextImageIndex)}
              onExited={() => setImageIndex(nextImageIndex)}
            >
              <img
                ref={imageRefs.current[index]}
                src={image.src.src}
                alt={image.alt}
                className={`absolute h-full w-auto transition-opacity ${
                  index === imageIndex ? 'opacity-100' : 'opacity-0'
                }`}
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
                {imageIndex === index || nextImageIndex === index ? (
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
                    className="block h-2.5 w-2.5 cursor-pointer rounded-full bg-zinc-400 hover:bg-zinc-600 dark:bg-zinc-500 hover:dark:bg-zinc-400"
                  >
                    <span className="sr-only">Image {index + 1} step</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <LinkWrapper
        url={
          images[imageIndex]
            ? images[imageIndex].url
            : images[previousImageIndex].url
        }
      >
        <p className="text-center">
          {images[imageIndex]
            ? images[imageIndex].caption
            : images[previousImageIndex].caption}
        </p>
      </LinkWrapper>
    </>
  )
}

export default ImageGallery
