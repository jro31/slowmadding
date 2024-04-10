// TODO: Add swipe to change images on mobile
// TODO: Handle if there are so many images that the step dots are wider than the article
// TODO: Scrolling on the last image should take you back to the beginning
// TODO: Make it more clear that clicking on an image scrolls to the next one
// Probably add chevrons or arrows back in, but very subtle and only on hover
// If swiping works on mobile, there will be no need to display them on touch screen devices

import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import useScreenWidth from '@/hooks/use-screen-width'
import LinkWrapper from './LinkWrapper'

let previousImageIndex

const ImageGallery = ({ images }) => {
  const imageRefs = useRef(images.map(() => React.createRef()))
  const [imageIndex, setImageIndex] = useState(0)
  const [nextImageIndex, setNextImageIndex] = useState(0)
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
    setNextImageIndex(newImageIndex)
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
              in={index === imageIndex || index >= nextImageIndex}
              key={image.src.src}
              nodeRef={imageRefs.current[index]}
              timeout={{
                enter: 200,
                exit: 300,
              }}
              classNames={{
                enter: '-translate-x-full translate-y-[-5%] -rotate-[25deg]',
                enterActive: 'translate-x-0 translate-y-0 rotate-0',
                exit: 'translate-x-0 translate-y-0 rotate-0',
                exitActive:
                  '-translate-x-full translate-y-[-25%] -rotate-[50deg]',
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
                className={`absolute h-full w-auto transition-all duration-[400ms] ${
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
