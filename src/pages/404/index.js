import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <Helmet>
        <title>APEXDUCKS | Page not found 404</title>
      </Helmet>
      Sorry 404 ! Page Not Found <br />
      <Link to={'/'}>Go to home</Link>
    </div>
  )
}
