import React, { useEffect, useRef, useState } from 'react'
import { motion, useCycle, useSpring } from 'framer-motion'
import NavToggle from '../components/NavToggle'
import Links from '../components/Links'

const menuBtn = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 1,
  }
}
const menuVariants = {
  open: {
    opacity: 1,
    width: '100%',
    height: '360px',
    display: 'block',
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: '#e8e8e8',
    overflow: 'no-scroll',
    transition: {
      opacity: { duration: 0.2, ease: "easeIn" },
      width: {tween: 100, duration: 0.1, ease: 'easeOut'},
      height: {tween: 100, duration: 0.1, ease: 'easeOut'} 
    }
  },
  closed: {
    opacity: 0,
    width: '10px',
    height: '10px',
    display: 'none',
    position: 'absolute',
    top: 0,
    backgroundColor: '#e8e8e8',
    transition: {
      opacity: { duration: 0.07 },
      width: {tween: 100, duration: 0.15, ease: 'easeIn'},
      height: {tween: 100, duration: 0.15, ease: 'easeIn'}
    }
  }
}
const backDim = {
  open: {
    opacity: 0.4,
    overflow: 'no-scroll',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    display: 'block',
    backgroundColor: 'black',
    zIndex: 1,
    //filter: 'blur(10px)',
    transition: {
      opacity: {duration: 0.5}
      //filter: {duration: 0.1, tween: 10}
    }
  },
  closed: {
    opacity: 0,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    display: 'none',
    backgroundColor: 'none',
    zIndex: -10,
    transition: {
      opacity: {duration: 0.4}
    }
  }
}

const Nav = () => {
  /*

  const [state, setState] = useState(false)
  this.targetElement = document.querySelector('html')
  const x = useSpring(0, { opacity: 0 })
  useEffect(() => {
    state
    ? targetElement.classList.add("no-scroll")
    : targetElement.classList.remove("no-scroll")
  })
  
  useEffect(() => {
    x.onChange(() => {
      x.get() > 1 ? setState(false) : setState(true)
    })
  }, [x])
  
  */

  const [isOpen, toggleOpen] = useCycle(false, true)

  return (
    <>
      <motion.nav
        className="mobile_nav"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={ menuBtn }
        //ref={el => menu = el}
        onClick={() => { toggleOpen() }}
        //onClick={() => { menuToggle(), toggleOpen() }}
        //toggle={() => { toggleOpen() }}
      >
        <NavToggle />
        <motion.div className="shit" variants={ menuVariants }>
          <Links />
        </motion.div>
      </motion.nav>
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"} 
        variants={ backDim }
        onClick={() => { toggleOpen() }}
      />
    </>
  )
}

export default Nav 