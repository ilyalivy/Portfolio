import React from 'react'
import './Header.css'
import photo from '../images/photo.jpeg'

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
          <img src={photo} alt="" className='photo'/>
          <h1 className='name'>Ilya Livschitz</h1>
        </div>
        <div>
        <h1 className="medium"><a href="https://medium.com/@ilyalivy" target="_blank">Medium</a></h1>
        </div>
    </div>
  )
}

export default Header