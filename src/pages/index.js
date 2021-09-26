import React from "react"

import Header from "../components/header/header"
import About from "../components/about/about"
import Projects from "../components/projects/projects"
import Skills from "../components/skills/skills"
import Footer from "../components/footer/footer"
import { Layout } from "../layout/layout"

const IndexPage = () => {
  return (
    <Layout>
      <Header/>
      <About/>
      <Projects/>
      <Skills/>
      <Footer/>
    </Layout>
  )
}

export default IndexPage
