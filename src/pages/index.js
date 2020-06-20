import React from "react"
import Layout from "../layout/Layout"
import About from "../components/About"
import Experience from "../components/Experience"
import Education from "../components/Education"
import Skills from "../components/Skills"
import Interests from "../components/Interests"
import Awards from "../components/Awards"

const IndexPage = () => {
  // Set up Intersection Observer to implement active navigation:
  // get sections to observe
  const sections = document.querySelectorAll("section")

  // get all nav links elements
  const navLinks = document.querySelectorAll("#sidebar a")

  let observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        console.log("entry id", entry.target.id)
        if (entry.intersectionRatio > 0) {
          // check on which section we are in
          // add class .active to nav link with that target name
          // otherwise remove .active class from that element
          navLinks.forEach(link => {
            return link.innerText.toLowerCase() === entry.target.id
              ? link.classList.add("active")
              : link.classList.remove("active")
          })
        }
      })
    },
    { threshold: 0.5 }
  )

  sections.forEach(section => {
    observer.observe(section)
  })

  return (
    <Layout>
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interests />
      <Awards />
    </Layout>
  )
}

export default IndexPage
