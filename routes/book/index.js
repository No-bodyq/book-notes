"use strict";

module.exports = async function (app, opts) {
  app.get("/:id", async function (request, reply) {
    const { id } = request.params;
    const book = await app.selectBook(id);
    return reply.view("book.ejs", {
      book: book,
    });
  });
};
