import React from "react"
import Layout from "../layout/Layout"
import About from "../components/About"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Skills from "../components/Skills"
import Interests from "../components/Interests"
import Awards from "../components/Awards"
const IndexPage = () => (
  <Layout>
    <About />
    <Experience />
    <Education />
    <Skills />
    <Interests />
    <Awards />
  </Layout>
)

export default IndexPage
