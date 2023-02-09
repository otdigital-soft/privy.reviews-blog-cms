const createBlogPages = require("./dynamic-pages/createBlogPages")
const createCategoryPages = require("./dynamic-pages/createCategoryPages")

exports.createPages = async ({ graphql, actions, reporter }) => {
  await Promise.all([
    // createBlogPages({ createPage: actions.createPage, graphql, reporter }),
    createCategoryPages({ createPage: actions.createPage, graphql, reporter }),
  ])
}
