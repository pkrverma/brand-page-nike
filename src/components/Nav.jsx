import React from 'react'

const Nav = () => {
  return (
    <nav className='container'>
        <div className="logo">
          <img
            src="/images/brand_logo.svg"
            alt="React Logo"
          />
        </div>
        <ul>
          <li href="#">Home</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
  )
}

export default Nav
