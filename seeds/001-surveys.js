exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("surveys")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("surveys").insert([
        { id: 1, title: "food", description: "food categories" },
        { id: 2, title: "sports", description: "sports categories" }
      ]);
    });
};
