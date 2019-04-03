exports.up = function(knex, Promise) {
  return knex.schema.createTable("questions", questions => {
    questions.increments("id").primary();
    questions.string("question").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("questions");
};
