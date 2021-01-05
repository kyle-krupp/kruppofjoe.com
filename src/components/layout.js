import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Navigation from '../components/navigation'
import 'prismjs/themes/prism-okaidia.css'
import lightLogo from '../images/light-logo.svg'

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div className='site-wrapper'>
      <header className='site-header'>
        <div className='site-title'>
          <Link to='/'>{data.site.siteMetadata.title}</Link>
        </div>
        <img src={lightLogo} alt='logo' />
        <Navigation />
      </header>
      {children}
      <footer className='site-footer'/>
    </div>
  )
}
