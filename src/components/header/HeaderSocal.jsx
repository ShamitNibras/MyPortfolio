import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'

const HeaderSocal = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/" target="_blank" ><FaGithub/></a>
        <a href="https://linkedin.com/" target="_blank"><BsLinkedin/></a>
    </div>
  )
}

export default HeaderSocal