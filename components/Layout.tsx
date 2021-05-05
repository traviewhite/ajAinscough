import Meta from 'components/Meta'
import Nav from 'components/Nav'
import Link from 'next/link'

const Layout = ({ children }) => {
  return (
    <div className='container'>
      <Meta />
      {/* <Nav /> */}
      {children}
      <footer>
        <p>©2020 ajainscough.studio | Aj Ainscough /</p>
        <p>
          <Link href='https://traviewhite.com/'>
            <a target='_blank'>/ Designed & Developed | TRAVIS WHITE</a>
          </Link>
        </p>
      </footer>
    </div>
  )
}

export default Layout
