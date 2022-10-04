import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub, FaMediumM, FaTwitter} from 'react-icons/fa'
import {IoMdMail} from 'react-icons/io'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tomasmakaj/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Tomasmakaj" target="_blank"><FaGithub/></a>
        <a href="https://medium.com/@tmakajcoding" target="_blank"><FaMediumM/></a>
        <a href="https://twitter.com/tomasmakaj_" target="_blank"><FaTwitter/></a>
        <a href="mailto:tmakajcoding@gmail.com" target="_blank"><IoMdMail/></a>
      
    </div>
  )
}

export default HeaderSocials