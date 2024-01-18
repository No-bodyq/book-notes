"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (app, opts) {
  const books = await app.getBooks();
  app.decorate("selectBook", function (id) {
    let book = null;
    books.forEach((bookObj) => {
      if (bookObj.id == id) {
        book = bookObj;
      }
    });
    return book;
  });
});
