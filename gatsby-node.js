/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql }) => {
    const result = await graphql(`
        {
            allWpContentNode {
                edges {
                    node {
                        id
                        uri
                        nodeType
                    }
                }
            }
            allWpContentType {
                edges {
                    node {
                      id
                      uri
                      name
                    }
                }
            }
        }
    `);

    const pages = result.data.allWpContentNode.edges;
    const archives = result.data.allWpContentType.edges;

    pages.forEach(page => {
        actions.createPage({
            path: page.node.uri,
            component: require.resolve('./src/wp/wp_page_template.js'),
            context:{
                id: page.node.id,
                nodeType: page.node.nodeType,
            },
        })
    })

    archives.forEach(archive => {
        if(archive.node.uri != null && archive.node.uri != "/"){
            actions.createPage({
                path: archive.node.uri,
                component: require.resolve('./src/wp/wp_archive_template.js'),
                context:{
                    id: archive.node.id,
                    regex: '/(hero/'+ archive.node.name +')/'
                },
            })
        }
    })
}