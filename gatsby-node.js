/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ actions, graphql }) => {
    const result = await graphql(`
        {

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


    const archives = result.data.allWpContentType.edges;



    archives.forEach(archive => {
        if(archive.node.uri != null && archive.node.uri != "/"){
            actions.createPage({
                path: archive.node.uri,
                component: require.resolve('./src/wp/wp_archive_template.js'),
                context:{
                    id: archive.node.id
                },
            })
        }
    })
}