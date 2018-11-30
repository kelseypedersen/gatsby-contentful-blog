import React from 'react'
import Link from 'gatsby-link'
import base from '../layouts/base.css'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Header from '../components/header'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Header />
        <Navigation />
        {children}
      </Container>
    )
  }
}

export default Template