import 'styles/main.scss'
import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'

import Layout from 'components/Layout'
// import Meta from 'components/Meta'

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export default App
