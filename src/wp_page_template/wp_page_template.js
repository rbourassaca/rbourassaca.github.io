import React from "react"
import { graphql } from "gatsby"

import SEO from "./../components/seo.js"
import Layout from "./../components/layout.js"

export const query = graphql`
    query ($id: String) {
        wpPage(id: {eq: $id}) {
            title
            content
        }
    }
`

const wptemplate = ( {data} ) => {
    const page = data.wpPage
    return (
        <Layout>
            <SEO title={page.title} />
            <div dangerouslySetInnerHTML={{__html: page.content}} />
        </Layout>
    )
}

export default wptemplate