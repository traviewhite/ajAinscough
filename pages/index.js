import Layout from 'components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import Nav from 'components/Nav'
import Links from 'components/Links'

import GalleryExample from 'components/Gallery'

export const galleryData = [
  {
    id: 0-1,
    img: "https://source.unsplash.com/random", 
    alt: "i",
    title: "TITLE",
    description: "description",
    year: "year",
    dimensions: "dimensions",
    medium: "medium",
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
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>AJ HOME</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="sidebar">
          <div className="sidebar_title">
            <h1>AJ Ainscough</h1>
            <h6>fine artist</h6>
          </div>

          <Nav />
          <nav>
            <Links />
          </nav>
          
          <div className="sidebar_social">
            <h5>instagram</h5>
            <h2>@ajainscoughstudio</h2>
          </div>
          <footer>
            c2020 AJ Ainscough
          </footer>
        </section>
        <ul className="gallery_wrapper">
          { galleryItems }
        </ul>
      </main>

    </Layout>
  )
}


const galleryItems = galleryData.map((value, i) =>
  <li className="thumbnail" key={i}>
    <Link href={value.link}>
      <img src={value.img} alt={value.alt} unsized />
    </Link>
    <div className="gallery_info">
      <h2>{value.title}</h2>
      <p>{value.description}</p>
      <br/>
      <h5>{value.year}</h5>
      <h5>{value.dimensions}</h5>
      <h5>{value.medium}</h5>
      {/* <div className="code_links">
        <Link href={value.gitLink}>
          <a target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </Link>
        <Link href={value.link}>
          <a target="_blank">
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        </Link>
      </div> */}
    </div>
  </li>
);