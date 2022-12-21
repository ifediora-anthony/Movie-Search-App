import React from 'react'
import Logo from '../logo.svg'

function Header() {
  return (
    <header className="app-header row">
        {/* <img src={Logo} /> */}
        <span className="logo">MyTestApp</span>
    </header>
  )
}

export default Header