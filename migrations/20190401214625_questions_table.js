exports.up = function(knex, Promise) {
  return knex.schema.createTable("questions", questions => {
    questions.increments("id").primary();
    questions.string("question").notNullable();
    questions
      .integer("surveysId")
      .unsigned()
      .notNullable()
      .references("surveys.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("questions");
};
