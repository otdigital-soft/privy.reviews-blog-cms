const path = require("path")

const createCategoryPages = async ({ createPage, graphql, reporter }) => {
  const categoryTemplate = path.resolve("./src/templates/category.js")

  const query = await graphql(`
    {
      allStrapiCategory {
        nodes {
          id
          Slug
          Title
        }
      }
    }
  `)

  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const categories = query.data.allStrapiCategory.nodes

  categories.forEach(category => {
    createPage({
      path: `/${category.Slug}`,
      component: categoryTemplate,
      context: {
        slug: category.Slug,
        title: category.Title,
      },
    })
  })
}

module.exports = createCategoryPages
