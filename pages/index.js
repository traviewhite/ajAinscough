import Layout from 'components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import GalleryGrid from 'components/GalleryGrid'
import Enter from 'components/Enter'
import { client, fetchEntriesPost } from 'utils/contentfulPosts'

export default function Home({ post }) {
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
      <Enter />
      <Layout>
        <Head>
          <title>Aj Ainscough Studio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <GalleryGrid post={post} />
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'post',
  })

  return {
    props: {
      post: await data.items ?? null,
    },
    revalidate: 1,
  }
}

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