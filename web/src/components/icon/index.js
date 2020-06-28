import React from 'react'
import HamburgerIcon from './hamburger'
import LeftArrowIcon from './left-arrow'

function Icon (props) {
  switch (props.symbol) {
    case 'hamburger':
      return <HamburgerIcon />
    case 'left-arrow':
      return <LeftArrowIcon />
    default:
      return <span>Unknown icon: {props.symbol}</span>
  }
}

export default Icon
