// import knex from knex
const knex = require("knex");
// import knexfile
const knexConfig = require("./knexfile");
// export module knexconfig for development
module.exports = knex(knexConfig.development);
