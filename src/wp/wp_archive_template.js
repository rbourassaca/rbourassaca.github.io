import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"

export const query = graphql`
    query ($id: String, $maxWidth: Int=3840, $quality: Int=100) {
        wpContentType(id: {eq: $id}) {
            label
            name
        }
        wp{
            heroSettings{
                images{
                    audio{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth, quality: $quality){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    video{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth, quality: $quality){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    web{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth, quality: $quality){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    client{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth, quality: $quality){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        allWpAudio {
            edges {
                node {
                    id
                    title
                    acf_audio {
                        description
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp{
                                    fluid(maxWidth: 300){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        allWpVideo {
            edges {
                node {
                    id
                    title
                    acf_video {
                        description
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp{
                                    fluid(maxWidth: 300){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        allWpWeb {
            edges {
                node {
                    id
                    title
                    acf_web {
                        description
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp{
                                    fluid(maxWidth: 300){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        allWpClient {
            edges {
                node {
                    id
                    title
                    acf_client {
                        description
                    }
                    featuredImage {
                        node {
                            localFile {
                                childImageSharp{
                                    fluid(maxWidth: 300){
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

const wptemplate = ( {data} ) => {
    const archive = data.wpContentType
    const heroImages = data.wp.heroSettings.images[archive.name]
    var projects = [];
    var background;

    switch(archive.name){
        case "audio":
            projects = data.allWpAudio.edges
            break
        case "video":
            projects = data.allWpVideo.edges
            break
        case "web":
            projects = data.allWpWeb.edges
            break
        case "client":
            projects = data.allWpClient.edges
            break
        default:
            projects = null
            break
    }

    console.log(projects);

    if(typeof(heroImages) === "object" && heroImages.length > 1){
        background = heroImages[Math.floor((Math.random() * heroImages.length))].localFile.childImageSharp.fluid
    }else{
        background = heroImages[0].localFile.childImageSharp.fluid
    } 

    return (
        <Layout>
            <SEO title={archive.label} />
            <Hero title={archive.label} background={background}/>
        </Layout>
    )
}

export default wptemplate