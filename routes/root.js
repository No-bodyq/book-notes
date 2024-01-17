"use strict";

module.exports = async function (app, opts) {
  const books = await app.getBooks();
  app.get("/", async function (request, reply) {
    return reply.view("index.ejs", {
      books: books,
    });
  });
};
