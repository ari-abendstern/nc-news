const express = require("express");
const app = express();

const {
  getTopics,
  getEndpoints,
  getArticles,
  getArticleById,
  getCommentsByArticleById,
} = require("./controllers/index.controllers");
const {
  handleServerErrors,
  handleNonExistentPath,
  handleCustomErrors,
  handlePsql22P02,
} = require("./errors/index");

app.get("/api/topics", getTopics);

app.get("/api/articles", getArticles);

app.get("/api", getEndpoints);

app.get("/api/articles/:article_id", getArticleById);

app.get("/api/articles/:article_id/comments", getCommentsByArticleById);

app.all("/api/*", handleNonExistentPath);
app.use(handleCustomErrors);

app.use(handlePsql22P02);

app.use(handleServerErrors);

module.exports = app;
