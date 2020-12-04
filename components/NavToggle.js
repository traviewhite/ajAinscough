import React from 'react'
import { motion } from 'framer-motion'

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#000"
    strokeLinecap="square"
    {...props}
  />
)

export const NavToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg width="40" height="25" viewBox="0 0 20 23">
      <Path
        variants={{
          closed: { d: "M 2 5 L 22 5", stroke: "#000" },
          open: { d: "M 3 16.5 L 22 2.5", stroke: "red" }
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 22 16.346", stroke: "#000" },
          open: { d: "M 3 2.5 L 22 16.346", stroke: "red" }
        }}
      />
    </svg>
  </button>
)

export default NavToggle