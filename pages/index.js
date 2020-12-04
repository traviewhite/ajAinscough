import React, { useEffect, useRef, useState } from 'react'
import Layout from 'components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Nav from 'components/Nav'
import Links from 'components/Links'
import { motion, useCycle } from 'framer-motion'
import Igbaby from 'components/Igbaby'
import { client, fetchEntriesPost } from 'utils/contentfulPosts'

import GalleryExample from 'components/Gallery'




const menuBtn = {
  open: {
    opacity: 1,
    width: '100vw',
    height: '100vh',
    // backgroundColor: 'black',
    // zIndex: 99999,
    // overflow: 'hidden',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    x: '0%',
    y: '0%',
    transition: {
      width: {tween: 100, delay: 3, duration: 0.25, ease: 'easeIn'},
      height: {tween: 100, delay: 3, duration: 0.25, ease: 'easeIn'}      
    }
  },
  closed: {
    opacity: 1,
    height: '0vh',
    width: '100vw',
    position: 'relative',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    // display: 'none',
    // x: '50%',
    // y: '50%',
    // backgroundColor: '#fff',
    // zIndex: -999,
    transition: {
      width: {tween: 500, delay: 0.1, duration: 0.8, ease: 'easeIn'},
      height: {tween: 500, delay: 0.1, duration: 0.8, ease: 'easeIn'}
    }
  }
}
const text = {
  open: {
    opacity: 1,
    // width: '100vw',
    // height: '100vh',
    // backgroundColor: 'black',
    // zIndex: 99999,
    // overflow: 'hidden',
    // position: 'absolute',
    // top: '0',
    // right: '0',
    // bottom: '0',
    // left: '0',
    // x: '0%',
    y: '0%',
    transition: {
      opacity: {tween: 200, delay: 0.1, duration: 1, ease: 'easeIn'},
      y: {tween: 200, delay: 0, duration: 0.7, ease: 'easeIn'},
      width: {tween: 100, duration: 0.15, ease: 'easeIn'},
      height: {tween: 100, duration: 0.15, ease: 'easeIn'}      
    }
  },
  closed: {
    opacity: 0,
    // height: '0vh',
    // width: '100vw',
    // position: 'relative',
    // top: '0',
    // right: '0',
    // bottom: '0',
    // left: '0',
    // display: 'none',
    // x: '50%',
    y: '200%',
    // backgroundColor: '#fff',
    // zIndex: -999,
    transition: {
      opacity: {tween: 200, delay: 0.1, duration: 1, ease: 'easeIn'},
      y: {tween: 200, delay: 0, duration: 0.8, ease: 'easeIn'},
      width: {tween: 100, duration: 0.1, ease: 'easeOut'},
      height: {tween: 100, duration: 0.1, ease: 'easeOut'}
    }
  }
}

export default function Home({ post }) {
  // console.log(post)

  const [isOpen, toggleOpen] = useCycle(true, false)

  // const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   async function getPosts() {
  //     const allPosts = await fetchEntriesPost()
  //     setPosts([...allPosts])
  //   }
  //   getPosts()
  // }, [])

  return (
    <>
      {/* <motion.div
        className="enter_screen"
        initial={ true }
        animate={ isOpen ? "open" : "closed" }
        variants={ menuBtn }
        //ref={el => menu = el}
        onClick={() => { toggleOpen() }}
      >
        <motion.h1 variants={ text }>AJ AINSCOUGH</motion.h1>
      </motion.div> */}
      <Layout>
        <Head>
          <title>AJ HOME</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <header className="navigation">
            <div className="nav_title">
              <h1>AJ AINSCOUGH</h1>
              {/* <h6>fine artist</h6> */}
            </div>

            <Nav />
            

            {/* <div className="sidebar_social">
              <h5>instagram</h5>
              <h2>@ajainscoughstudio</h2>
            </div> */}
            {/* <footer>
              c2020 AJ Ainscough
            </footer> */}
          </header>
          {/* <ul className="gallery_wrapper">
            { galleryItems }
          </ul> */}
          {/* <GalleryExample /> */}
          
          {/* {posts.length > 0 
            ? posts.map((p) =>
              <Igbaby
                title={p.fields.title}
                // date={post.fields.date}
                fuck={[{p}]}
                // height={p.fields.src.fields.file.details.image.height}
                // width={p.fields.src.fields.file.details.image.wdith}
                // image={post.fields.image[0].url}
                // alt={post.fields.alt}
                key={p.sys.id}
              />
            )
          : null} */}

          <Igbaby
            title={post}
            // date={post.fields.date}
            fuck={post}
            // height={p.fields.src.fields.file.details.image.height}
            // width={p.fields.src.fields.file.details.image.width}
            // image={post.fields.image[0].url}
            // alt={post.fields.alt}
            // key={post.sys.id}
          />
          
        </main>
      </Layout>
    </>
  )
}

// const galleryItems = galleryData.map((value, i) =>
//   <li className="thumbnail" key={i}>
//     <Link href={value.link}>
//       <img src={value.img} alt={value.alt} unsized />
//     </Link>
//     <div className="gallery_info">
//       <h2>{value.title}</h2>
//       <p>{value.description}</p>
//       <br/>
//       <h5>{value.year}</h5>
//       <h5>{value.dimensions}</h5>
//       <h5>{value.medium}</h5>
//     </div>
//   </li>
// )

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'post',
  })
  // const posts = await data.map((p) => {
  //   return p.items[0]
  // })

  return {
    props: {
      post: await data.items ?? null,
    },
    // revalidate: 1,
  }
}


















export const galleryData = [
  {
    id: 0-1,
    img: "https://source.unsplash.com/random", 
    alt: "i",
    title: "SNOOP GARDEN",
    description: "Wallet chains smarter child keds des’ree. Snoop dogg savage garden new kids on the block toyota supra yin yang ghost pottery scene.",
    year: "2020",
    dimensions: "18 x 24",
    medium: "Oil on Canvas",
    link: "/"
  },
  {
    id: 0-2,
    img: "https://source.unsplash.com/random/600x600", 
    alt: "i",
    title: "TITLE",
    description: "description",
    year: "year",
    dimensions: "dimensions",
    medium: "medium",
    link: "/"
  },
  {
    id: 0-3,
    img: "https://source.unsplash.com/random/600x800", 
    alt: "i",
    title: "TITLE",
    description: "description",
    year: "year",
    dimensions: "dimensions",
    medium: "medium",
    link: "/"
  },
  {
    id: 0-4,
    img: "https://source.unsplash.com/random/600x900", 
    alt: "i",
    title: "TITLE",
    description: "description",
    year: "year",
    dimensions: "dimensions",
    medium: "medium",
    link: "/"
  },
  {
    id: 0-5,
    img: "https://source.unsplash.com/random/700x900", 
    alt: "i",
    title: "TITLE",
    description: "description",
    year: "year",
    dimensions: "dimensions",
    medium: "medium",
    link: "/"
  },
  {
    id: 0-6,
    img: "https://source.unsplash.com/random/900x600", 
    alt: "i",
    title: "TITLE",
    description: "description",
    year: "year",
    dimensions: "dimensions",
    medium: "medium",
    link: "/"
  },
  {
    id: 0-7,
    img: "https://source.unsplash.com/random/500x800", 
    alt: "i",
    title: "TITLE",
    description: "description",
    year: "year",
    dimensions: "dimensions",
    medium: "medium",
    link: "/"
  },
  {
    id: 0-8,
    img: "https://source.unsplash.com/random/900x500", 
    alt: "i",
    title: "TITLE",
    description: "description",
    year: "year",
    dimensions: "dimensions",
    medium: "medium",
    link: "/"
  },
  {
    id: 0-9,
    img: "https://source.unsplash.com/random/800x800", 
    alt: "i",
    title: "TITLE",
    description: "description",
    year: "year",
    dimensions: "dimensions",
    medium: "medium",
    link: "/"
  }
]