/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql }) => {
    const result = await graphql(`
        {
            allWpPage {
                edges {
                    node {
                        id
                        uri
                    }
                }
            }
        }
    `);

    const pages = result.data.allWpPage.edges
    console.log(result.data.allWpPage.edges)

    pages.forEach(page => {
        actions.createPage({
            path: page.node.uri,
            component: require.resolve('./src/wp_page_template/wp_page_template.js'),
            context:{
                id: page.node.id,
            },
        })
    })
}