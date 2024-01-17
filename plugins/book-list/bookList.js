"use strict";

const fp = require("fastify-plugin");
const { DB_PWD } = process.env;
let books = [];

module.exports = fp(async function (app, opts) {
  app.register(require("@fastify/postgres"), {
    connectionString: `postgresql://postgres:${DB_PWD}@localhost:5432/books`,
  });

  app.decorate("getBooks", async function () {
    const client = await app.pg.connect();

    try {
      const data = await client.query("SELECT * FROM booklist");
      data.rows.forEach((item) => books.push(item));
      return books;
    } finally {
      client.release();
    }
  });
});
