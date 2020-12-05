import { motion, useCycle } from 'framer-motion'

const menuBtn = {
  open: {
    opacity: 1,
    width: '100vw',
    height: '100vh',
    // backgroundColor: 'black',
    // zIndex: 99999,
    // overflow: 'hidden',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    x: '0%',
    y: '0%',
    transition: {
      width: {tween: 100, delay: 3, duration: 0.25, ease: 'easeIn'},
      height: {tween: 100, delay: 3, duration: 0.25, ease: 'easeIn'}      
    }
  },
  closed: {
    opacity: 1,
    height: '0vh',
    width: '100vw',
    position: 'relative',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    // display: 'none',
    // x: '50%',
    // y: '50%',
    // backgroundColor: '#fff',
    // zIndex: -999,
    transition: {
      width: {tween: 500, delay: 0.1, duration: 0.8, ease: 'easeIn'},
      height: {tween: 500, delay: 0.1, duration: 0.8, ease: 'easeIn'}
    }
  }
}
const text = {
  open: {
    opacity: 1,
    // width: '100vw',
    // height: '100vh',
    // backgroundColor: 'black',
    // zIndex: 99999,
    // overflow: 'hidden',
    // position: 'absolute',
    // top: '0',
    // right: '0',
    // bottom: '0',
    // left: '0',
    // x: '0%',
    y: '0%',
    transition: {
      opacity: {tween: 200, delay: 0.1, duration: 1, ease: 'easeIn'},
      y: {tween: 200, delay: 0, duration: 0.7, ease: 'easeIn'},
      width: {tween: 100, duration: 0.15, ease: 'easeIn'},
      height: {tween: 100, duration: 0.15, ease: 'easeIn'}      
    }
  },
  closed: {
    opacity: 0,
    // height: '0vh',
    // width: '100vw',
    // position: 'relative',
    // top: '0',
    // right: '0',
    // bottom: '0',
    // left: '0',
    // display: 'none',
    // x: '50%',
    y: '200%',
    // backgroundColor: '#fff',
    // zIndex: -999,
    transition: {
      opacity: {tween: 200, delay: 0.1, duration: 1, ease: 'easeIn'},
      y: {tween: 200, delay: 0, duration: 0.8, ease: 'easeIn'},
      width: {tween: 100, duration: 0.1, ease: 'easeOut'},
      height: {tween: 100, duration: 0.1, ease: 'easeOut'}
    }
  }
}

export default function Enter() {
  const [isOpen, toggleOpen] = useCycle(true, false)

  return (
    <div className="heading">
      <motion.div
        className="enter_screen"
        initial={ true }
        animate={ isOpen ? "open" : "closed" }
        variants={ menuBtn }
        //ref={el => menu = el}
        onClick={() => { toggleOpen() }}
      >
        <motion.h1 variants={ text }>AJ AINSCOUGH</motion.h1>
      </motion.div>
    </div>
  )
}