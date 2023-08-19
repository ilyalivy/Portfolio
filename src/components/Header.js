import React from 'react'
import './Header.css'
import photo from '../images/photo.jpeg'

const Header = () => {
  return (
    <div className="header">
        <div className="logo">
          <img src={photo} alt="" className='photo'/>
          <h3 className='name'>Ilya Livschitz</h3>
        </div>
        <div>
        <h3 className="medium"><a href="https://medium.com/@ilyalivy" target="_blank">Medium</a></h3>
        </div>
    </div>
  )
}

export default Header