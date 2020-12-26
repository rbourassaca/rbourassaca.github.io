import React from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import SEO from "../components/seo.js"
import Layout from "../components/layout.js"
import Hero from "../components/hero/hero.js"

export const query = graphql`
    query ($id: String) {
        wpContentType(id: {eq: $id}) {
            label
            name
        }
    }
`

const wptemplate = ( {data} ) => {
    const archive = data.wpContentType
    return (
        <Layout>
            <SEO title={archive.label} />
            <Hero title={archive.label} subtitle="Ceci est un sous-titre"/>
        </Layout>
    )
}

export default wptemplate