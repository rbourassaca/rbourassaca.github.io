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
    let galleryImagesId = []
    if (project.content.length > 0) {
      project.content.map(item => {
        if (item.strapi_component === "page.gallery") {
          item.images.map(image => {
            galleryImagesId.push(image.localFile___NODE)
          })
        }
      })
    }
    actions.createPage({
      path: project.project_category.slug + "/" + project.slug,
      component: path.resolve("./src/template/project.js"),
      context: {
        id: project.id,
        galleryImagesId: galleryImagesId,
      },
    })
  })
}
