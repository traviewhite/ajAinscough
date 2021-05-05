import Head from 'next/head'
import Link from 'next/link'
import GalleryGrid from 'components/GalleryGrid'
import { client } from 'utils/contentfulPosts'

export default function Home({ post }: any) {
  return (
    <>
      <Head>
        <title>Aj Ainscough Studio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <h1 className=''>AJ AINSCOUGH</h1>
        <h2>
          i have normal tits
          <br /> make arts & crafts
          <br /> uses brushes only
        </h2>
        <div className='scrolling-banner'>
          <h4>
            I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and
            stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make
            art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff *
            I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and
            stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make
            art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff *
            I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and
            stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make
            art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff *
            I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and
            stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make
            art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff *
            I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and
            stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make
            art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff *
            I make art and stuff * I make art and stuff * I make art and stuff * I make art and stuff * I make art and
            stuff * I make art and stuff * I make art and stuff * I make art and stuff *{' '}
          </h4>
        </div>
        <section className='index-intro'>
          <div className='index-intro-featured'>
            <div className='featured-text'>
              <p>$FEATURED$</p>
            </div>
            <img src={post[3].fields.image.fields.file.url} alt={post[3].fields.title} />
          </div>
          <div className='index-intro-info'>
            <div className='index-intro-heading'>
              <h3>{post[3].fields.title}</h3>
              <p>
                {post[3].fields.year}, {post[3].fields.medium}, {post[3].fields.dimensions}
              </p>
            </div>
            <button>BUY</button>
          </div>
        </section>
        <h2 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>‼️MORE‼️</h2>
        <h2 style={{ textAlign: 'center', marginLeft: '1rem', marginBottom: '2rem' }}>👇</h2>

        <GalleryGrid post={post} />
      </main>
    </>
  )
}

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'post',
  })

  return {
    props: {
      post: data.items ?? null,
    },
    revalidate: 1,
  }
}
