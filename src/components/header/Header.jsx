import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mine_2.png'
import HeaderSocal from './HeaderSocal'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Assalamu alaikum warahmatullahi wabarakatuh I'm</h5>
        <h1>Shamit Nibras</h1>
        <CTA />
        <HeaderSocal />

        <div className="me">
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>
        </header>
  )
}

export default Header