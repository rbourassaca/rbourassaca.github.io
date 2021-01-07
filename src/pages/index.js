import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"

export const query = graphql`
    query {
        file(relativePath: {eq: "logo_big.png"}){
            childImageSharp{
                fluid(maxWidth: 800, quality: 100){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        wp{
            homeSettings{
                home{
                    nomDeLaPage
                }
            }
            heroSettings{
                images{
                    accueil{
                        localFile{
                            childImageSharp{
                                fluid(maxWidth: 3840, quality: 100){
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

const index = ({data}) => {
    const title = data.wp.homeSettings.home.nomDeLaPage
    const logoBig = data.file.childImageSharp.fluid
    const heroImages = data.wp.heroSettings.images.accueil
    var background

    if(typeof(heroImages) === "object" && heroImages.length > 1){
        background = heroImages[Math.floor((Math.random() * heroImages.length))].localFile.childImageSharp.fluid
    }else{
        background = heroImages[0].localFile.childImageSharp.fluid
    } 

    return (
        <Layout>
            <SEO title={title} />
            <Hero logo={logoBig} background={background}/>
        </Layout>
    )
}

export default index