import React from 'react'
import About from './About'
import Contact from './Contact'
import Entreprises from './Entreprises'
import Faq from './Faq'
import Features from './Features'
import Formations from './Formations'
import Testimenial from './Testimenial'

function Main() {
  return (
    <div id="main">
        <Entreprises/>
        <Testimenial/>
        <About/>
        <Formations/>
        <Features/>
        <Faq/>
        <Contact/>
    </div>
  )
}

export default Main