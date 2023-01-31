const createBlogPages = require("./dynamic-pages/createBlogPages")

exports.createPages = async ({ graphql, actions, reporter }) => {
  await Promise.all([
    createBlogPages({ createPage: actions.createPage, graphql, reporter }),
  ])
}
