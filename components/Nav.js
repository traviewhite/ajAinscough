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
    height: '350px',
    display: 'block',
    position: 'fixed',
    // top: 0,
    // right: 0,
    // left: 0,
    backgroundColor: 'white',
    overflow: 'no-scroll',
    zIndex: 5,
    transition: {
      opacity: { duration: 0.1, ease: "easeOut" },
      width: {tween: 400, duration: 0.1, ease: 'easeOut'},
      height: {tween: 200, duration: 0.45, ease: 'easeOut'} 
    }
  },
  closed: {
    // opacity: 0,
    width: '100%',
    height: '0px',
    display: 'none',
    // position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'white',
    transition: {
      opacity: { delay: 0.25, duration: 0.05 },
      display: {tween: 200, delay: 0.25, duration: 0.1, ease: 'easeIn'},
      width: {tween: 200, duration: 0.5, ease: 'easeIn'},
      height: {tween: 200, duration: 0.25, ease: 'easeIn'}
    }
  }
}
const backDim = {
  open: {
    opacity: 0.5,
    overflow: 'no-scroll',
    width: '100vw',
    height: '100vh',
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
      opacity: {duration: 0.25}
      //filter: {duration: 0.1, tween: 10}
    }
  },
  closed: {
    opacity: 0,
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: '0px',
    bottom: '0px',
    right: '0px',
    left: '0px',
    display: 'none',
    backgroundColor: 'black',
    zIndex: -10,
    transition: {
      opacity: {tween: 200, delay: 0, duration: 0.75, ease: 'easeOut'},
      display: {tween: 400, delay: 5, duration: 1, ease: 'easeOut'},
      zIndex: {tween: 400, delay: 5, duration: 0.4, ease: 'easeOut'}
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
      <div className="desktop_nav">
        <Links />
      </div>
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