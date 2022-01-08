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
          content
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

  const returnRequiredImagesIds = pageType => {
    let imagesIds = []
    if (pageType.content.length > 0) {
      pageType.content.map(item => {
        if (item.strapi_component === "page.gallery") {
          item.images.map(image => {
            imagesIds.push(image.localFile___NODE)
          })
        }
      })
    }
    return imagesIds
  }

  archives.forEach(archive => {
    createPage({
      path: archive.slug,
      component: path.resolve("./src/template/archive.js"),
      context: {
        id: archive.id,
        slug: archive.slug,
      },
    })
  })

  projects.forEach(project => {
    let imagesIds = returnRequiredImagesIds(project)
    actions.createPage({
      path: project.project_category.slug + "/" + project.slug,
      component: path.resolve("./src/template/project.js"),
      context: {
        id: project.id,
        imagesIds: imagesIds,
      },
    })
  })
}
