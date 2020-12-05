import Head from '../components/Head'
import Nav from 'components/Nav'
import Link from 'next/link'

const Layout = ({ children })  => {
  return (
    <div className="container">
      <Head />
      <Nav />
      {children}
      <footer>
        <p>©2020 ajainscough.studio | Aj Ainscough /</p>
        <p><Link href="https://traviewhite.com/">
          <a target="_blank">
            / DESIGNED & DEVELOPED | TRAVIS WHITE
          </a>
        </Link></p>
      </footer>
    </div>
  )
}

export default Layout