exports.up = function(knex, Promise) {
  return knex.schema.createTable("answers", answers => {
    answers.increments("id").primary();
    answers.integer("yes").defaultTo(0);
    answers.integer("no").defaultTo(0);
    answers
      .integer("questionsId")
      .unsigned()
      .notNullable()
      .references("questions.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("answers");
};
