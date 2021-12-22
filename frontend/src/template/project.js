import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"
import ProjectInfo from "../components/projectInfo/projectInfo.js"

const Project = () => {
  /*
    const title = data.wpContentNode.title
    const contentType = data.wpContentNode.contentType.node.name
    const contentTypeBackground = data.wp.heroSettings.images[contentType]
    let background

    if(data.wpContentNode.featuredImage != null){
        background = data.wpContentNode.featuredImage.node.localFile.childImageSharp.fluid
    }else if(contentTypeBackground.length > 1){
        background = contentTypeBackground[Math.floor((Math.random() * contentTypeBackground.length))].localFile.childImageSharp.fluid
    }else{
        background = contentTypeBackground[0].localFile.childImageSharp.fluid
    }
    */

  return (
    <Layout>
      <Seo title={"title"} />
      <Hero title={"title"} />
    </Layout>
  )
}

export default Project
