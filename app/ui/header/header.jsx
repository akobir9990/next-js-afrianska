import Link from 'next/link'
import React from 'react'

function header() {
  return (
    <div className="header">
    <div className="container">
      <h1 className="headerTitle">
        New Automation <br /> Tool for Your Home
      </h1>
      <p className="headerSubtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
        tristique vulputate ultrices ut mauris tellus at. Posuere
        sollicitudin odio tellus elit.
      </p>

      <Link className="projectsBtn" href="ourprojects">
        See Our Project
      </Link>
    </div>
  </div>  )
}

export default header