import { motion } from 'framer-motion'
import Link from 'next/link'

const ulvariants = {
  open: {
    transition: { delay: 0.1, staggerChildren: 0.08, delayChildren: 0.05 }
  },
  closed: {
    transition: { delay: 0, staggerChildren: 0.02, staggerDirection: -1 }
  }
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { tween: 100, ease: "easeIn" }
    }
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { tween: 100, ease: "easeOut" }
    }
  }
}

const Links = () => (
  <motion.div className="nav_menu">
    <motion.ul variants={ ulvariants }>
      <h5>YEAR :</h5>
      <Link href="/code">
        <motion.li variants={variants}>
          <a>2020</a>
        </motion.li>
      </Link>

      <Link href="/design">
        <motion.li variants={variants}>
          <a>2019</a>
        </motion.li>
      </Link>
      
      <Link href="/fine-art">
        <motion.li variants={variants}>
          <a>2018</a>
        </motion.li>
      </Link>

      <Link href="/photo">
        <motion.li variants={variants}>
          <a>2017</a>
        </motion.li>
      </Link>

      <Link href="/about">
        <motion.li variants={variants}>
          <a>2016</a>
        </motion.li>
      </Link>

      <Link href="/about">
        <motion.li variants={variants}>
          <a>2015-0000</a>
        </motion.li>
      </Link>
    </motion.ul>

    
    <motion.ul variants={ ulvariants }>
      <h5>MENU :</h5>
      <Link href="/code">
        <motion.li variants={variants}>
          <a>Shows</a>
        </motion.li>
      </Link>

      <Link href="/design">
        <motion.li variants={variants}>
          <a>Contact</a>
        </motion.li>
      </Link>
      
      <Link href="/fine-art">
        <motion.li variants={variants}>
          <a>CV</a>
        </motion.li>
      </Link>

      <Link href="/photo">
        <motion.li variants={variants}>
          <a>Shop</a>
        </motion.li>
      </Link>
    </motion.ul>
  </motion.div>
)

export default Links