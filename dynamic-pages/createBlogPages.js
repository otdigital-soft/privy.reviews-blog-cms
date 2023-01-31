const path = require("path")

const createBlogPages = async ({ createPage, graphql, reporter }) => {
  const blogTemplate = path.resolve("./src/templates/blog.js")

  const query = await graphql(`
    {
      allStrapiBlog {
        nodes {
          Slug
          Title
          Date
          Content {
            data {
              Content
            }
          }
        }
      }
    }
  `)

  if (query.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const blogs = query.data.allStrapiBlog.nodes

  blogs.forEach(blog => {
    createPage({
      path: `/blog/${blog.Slug}`,
      component: blogTemplate,
      context: {
        slug: blog.Slug,
        title: blog.Title,
        body: blog.Content.data.Content,
        createdAt: blog?.Date,
      },
    })
  })
}

module.exports = createBlogPages
