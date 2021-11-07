import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo.js"
import Layout from "../components/layout.js"
//import Hero from "../components/hero/hero.js"
import OfferedServices from "../components/offeredServices/offeredServices.js"

//TODO: Ajuster la requête du CMS
export const query = graphql`
    query {
        strapiFrontendSettings{
            logoBig{
                localFile{
                    childImageSharp{
                        fluid(maxWidth: 700){
						    ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

const index = ({data}) => {
    const title = "Accueil"
    const logoBig = data.strapiFrontendSettings.logoBig.localFile.childImageSharp
    const heroImages = {}//data.wp.heroSettings.images.accueil
    const services = null//data.wp.homeSettings.home.servicesOfferts
    var background
/*
    if(typeof(heroImages) === "object" && heroImages.length > 1){
        background = heroImages[Math.floor((Math.random() * heroImages.length))].localFile.childImageSharp.fluid
    }else{
        background = heroImages[0].localFile.childImageSharp.fluid
    } 
*/
    return (
        <Layout>
            <Seo title={title} />
            
        </Layout>
    )
}

export default index