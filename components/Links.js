import { motion } from 'framer-motion'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const ulvariants = {
  open: {
    transition: { delay: 0, staggerChildren: 0.1, delayChildren: 0.1 }
  },
  closed: {
    transition: { delay: 0, staggerChildren: 0.05, staggerDirection: -1 }
  }
}
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: { tween: 100, duration: 0.1, ease: "easeInOut" },
      y: { tween: 100, duration: 0.1, ease: "easeIn" }
    }
  },
  closed: {
    y: 25,
    opacity: 0,
    transition: {
      opacity: { tween: 100, delay: 0, duration: 0.01, ease: "easeOut" },
      y: { tween: 100, duration: 0.05, ease: "easeOut" }
    }
  }
}
const hrvariant = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      opacity: { tween: 200, delay: 0.35, duration: 0.25, ease: "easeIn" },
      y: { tween: 100, ease: "easeIn" }
    }
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      opacity: { tween: 100, delay: 0, ease: "easeOut" },
      y: { tween: 100, ease: "easeOut" }
    }
  }
}

const Links = () => (
  <motion.div className="nav_menu">
    <motion.ul variants={ ulvariants }>
      <Link href="/">
        <motion.li variants={variants}>
          <a>ALL</a>
        </motion.li>
      </Link>

      <Link href="/">
        <motion.li variants={variants}>
          <a>2020</a>
        </motion.li>
      </Link>

      <Link href="/">
        <motion.li variants={variants}>
          <a>2019</a>
        </motion.li>
      </Link>
    </motion.ul>

    <p>|</p>
    <motion.hr variants={ hrvariant }/>
    
    <motion.ul variants={ ulvariants }>
      <Link href="/contact">
        <motion.li variants={variants}>
          <a>Contact</a>
        </motion.li>
      </Link>
      
      <Link href="/cv">
        <motion.li variants={variants}>
          <a>CV</a>
        </motion.li>
      </Link>

      <Link href="/">
        <motion.li variants={variants}>
          <a>Shop</a>
        </motion.li>
      </Link>
    </motion.ul>

    <motion.ul variants={ ulvariants }>
      <motion.li variants={variants}>
        <Link href="https://www.instagram.com/ajainscoughstudio/">
          <a className="social_icon" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </Link>
      </motion.li>
    </motion.ul>
  </motion.div>
)

export default Links