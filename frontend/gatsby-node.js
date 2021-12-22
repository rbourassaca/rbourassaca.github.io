/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allStrapiProjectCategories {
        nodes {
          id
          slug
        }
      }
      allStrapiProjects {
        nodes {
          id
          slug
          project_category {
            slug
          }
        }
      }
    }
  `)

  const path = require("path")
  const archives = result.data.allStrapiProjectCategories.nodes
  const projects = result.data.allStrapiProjects.nodes

  archives.forEach(archive => {
    createPage({
      path: archive.slug,
      component: path.resolve("./src/template/archive.js"),
      context: {
        id: archive.id,
      },
    })
  })

  projects.forEach(project => {
    actions.createPage({
      path: project.project_category.slug + "/" + project.slug,
      component: path.resolve("./src/template/project.js"),
      context: {
        id: project.id,
      },
    })
  })
}
