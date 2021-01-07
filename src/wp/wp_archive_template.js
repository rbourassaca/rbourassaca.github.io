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
    }
`

const wptemplate = ( {data} ) => {
    const archive = data.wpContentType
    const heroImages = data.wp.heroSettings.images[archive.name]
    var background;

    console.log(heroImages);

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