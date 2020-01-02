import React from 'react'
import Logo from '../image/logo.png'



const Header = ()=>{

  

  return (
    <header className="header container">
    <div className="imgbox">
      <img src={Logo} alt="Logo"/>
    </div>

    <div className="header-breadcrumb">
      Fur Coats
    </div>
  </header>
    )
}

export default Header