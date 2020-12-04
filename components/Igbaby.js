import React, { useState, useCallback } from "react"
// import { render } from "react-dom"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
// import { photos } from "components/image_data"
import Link from 'next/link'
import { fetchEntriesPost } from 'utils/contentfulPosts'

// export const photos = [
//   {
//     title: 'skjs',
//     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//     width: 1,
//     height: 1
//   },
//   {
//     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     width: 3,
//     height: 4
//   }
// ];


export default function Igbaby({ title, fuck, height, width }) {
  // let fudge = [{ yeezy: fuck }]
  let arr = fuck.map(p => ({ src: p.fields.src.fields.file.url, width: p.fields.src.fields.file.details.image.width, height: p.fields.src.fields.file.details.image.height }))
  // var dick = fuck.map(p => ({ src: p.url }))
  // let test = arr

  const photos = arr
    // {
    //   title,
    //   src,
    //   height,
    //   width
    // }
  
  
  
  
  // console.log(fuck)
  // const photos = Object.entries(title, src, height, width).map((p, i) => {
  //   [
  //     {
  //       // title = `'${p.title}'`,
  //       src: p.src,
  //       height: `${p.height}`,
  //       width: `${p.width}`,

  //     }
  //   ]
  // })
  
  // const photos =  Object.entries(src).map((p) =>
  //   [{
  //     src: p.src,
  //     height: 4,
  //     width: 2
  //   }])

  // const photos = [ Object.entries(title, src, height, width).map((p, i) => 
  //   {
  //     src = p.src
  //     title = p.title
  //   }
  // )]
        
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false)
  
  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, [])
  
  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  

  return (
    <div>
      {/* <div className='test_box'>
        {galleryData.map((value, i) =>
          <div className="thumbnail" key={i} onClick={ openLightbox }>
            <Link href={value.link}>
              <img src={value.img} alt={value.alt} unsized />
            </Link>
          </div>
        )}
      </div> */}
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
    </div>
  )
}

// export async function getStaticProps() {
//   let data = await fetchEntriesPost()
//   // const posts = await res.map((p) => {
//   //   return p.fields
//   // })

//   return {
//     props: {
//       post: await data,
//     },
//     revalidate: 1,
//   }
// }
