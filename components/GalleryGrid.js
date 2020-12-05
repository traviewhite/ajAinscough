import React, { useState, useCallback } from 'react'
// import { render } from "react-dom"
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Link from 'next/link'

export default function GalleryGrid({ post }) {
  const photos = post.map(p => (
    {
      title: p.fields.title + ', ' + p.fields.year + ', ' + p.fields.medium + ', ' + p.fields.dimensions,
      src: p.fields.image.fields.file.url,
      alt: p.fields.title,
      width: p.fields.image.fields.file.details.image.width, 
      height: p.fields.image.fields.file.details.image.height,
      // date: p.fields.date,
      key: p.sys.id
    }
  ))
  
  // console.log(post)
  
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])
  
  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <Gallery photos={ photos } direction={ 'column' } margin={ 6 } onClick={ openLightbox } />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={ closeLightbox }>
            <Carousel
              currentIndex={ currentImage }
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  )
}