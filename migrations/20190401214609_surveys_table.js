exports.up = function(knex, Promise) {
  return knex.schema.createTable("surveys", surveys => {
    surveys.increments("id").primary();
    surveys
      .string("title")
      .unique()
      .notNullable();
    surveys.string("description");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("surveys");
};
