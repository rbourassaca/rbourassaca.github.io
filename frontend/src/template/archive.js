import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"
import ProjectList from "../components/projectList/projectList.js"

const Archive = () => {
  /*
    const archive = data.wpContentType
    const heroImages = data.wp.heroSettings.images[archive.name]
    const defaultThumbnail = data.wp.themeSettings.general.thumbnailParDefaut.localFile
    const projects = data.allWpContentNode.nodes;
    let background;

    if(typeof(heroImages) === "object" && heroImages.length > 1){
        background = heroImages[Math.floor((Math.random() * heroImages.length))].localFile.childImageSharp.fluid
    }else{
        background = heroImages[0].localFile.childImageSharp.fluid
    }
    */
  return (
    <Layout>
      <Seo title={"archive.label"} />
      <Hero title={"archive.label"} />
    </Layout>
  )
}

export default Archive
