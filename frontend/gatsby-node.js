const { isTemplateExpression } = require("typescript")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allStrapiPages {
        nodes {
          id
          slug
          content
        }
      }
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
  const pages = result.data.allStrapiPages.nodes
  const archives = result.data.allStrapiProjectCategories.nodes
  const projects = result.data.allStrapiProjects.nodes

  const returnRequiredImagesIds = pageType => {
    let imagesIds = []
    if (pageType.content.length > 0) {
      pageType.content.map(item => {
        switch (item.strapi_component) {
          case "page.gallery":
            item.images.map(image => {
              imagesIds.push(image.localFile___NODE)
            })
            break
          case "page.offered-services":
            item.services.map(service => {
              imagesIds.push(service.logo.localFile___NODE)
            })
            break
        }
      })
    }
    return imagesIds
  }

  pages.forEach(page => {
    createPage({
      path: page.slug === "accueil" || "home" ? "/" : page.slug,
      component: path.resolve("./src/template/page.js"),
      context: {
        id: page.id,
        imagesIds: returnRequiredImagesIds(page),
      },
    })
  })

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
    actions.createPage({
      path: project.project_category.slug + "/" + project.slug,
      component: path.resolve("./src/template/project.js"),
      context: {
        id: project.id,
        imagesIds: returnRequiredImagesIds(project),
      },
    })
  })
}
