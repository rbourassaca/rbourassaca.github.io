import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"

export const query = graphql`
    query ($id: String, $maxWidth: Int=3840, $thumb: Int=300) {
        wpContentType(id: {eq: $id}) {
            label
            name
            contentNodes{
                nodes{
                    ... on WpAudio{
                        id
                        title
                        acf_audio{
                            description
                        }
                        featuredImage {
                            node {
                                localFile {
                                    childImageSharp{
                                        fluid(maxWidth: $thumb){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ... on WpVideo{
                        id
                        title
                        acf_video{
                            description
                        }
                        featuredImage {
                            node {
                                localFile {
                                    childImageSharp{
                                        fluid(maxWidth: $thumb){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ... on WpWeb{
                        id
                        title
                        acf_web{
                            description
                        }
                        featuredImage {
                            node {
                                localFile {
                                    childImageSharp{
                                        fluid(maxWidth: $thumb){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ... on WpWeb{
                        id
                        title
                        acf_web{
                            description
                        }
                        featuredImage {
                            node {
                                localFile {
                                    childImageSharp{
                                        fluid(maxWidth: $thumb){
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                    ... on WpClient{
                        id
                        title
                        acf_client{
                            description
                        }
                        featuredImage {
                            node {
                                localFile {
                                    childImageSharp{
                                        fluid(maxWidth: $thumb){
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
        wp{
            heroSettings{
                images{
                    audio{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    video{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    web{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    client{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: $maxWidth){
                                    ...GatsbyImageSharpFluid
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
    var projects = archive.contentNodes.nodes;
    var background;


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