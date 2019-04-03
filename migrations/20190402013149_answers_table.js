exports.up = function(knex, Promise) {
  return knex.schema.createTable("answers", answers => {
    answers.increments("id").primary();
    answers.integer("true");
    answers.integer("false");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("answers");
};
