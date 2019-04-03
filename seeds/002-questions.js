exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("questions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("questions").insert([
        { id: 1, question: "do you like sushi?", surveysId: 1 },
        { id: 2, question: "do you like veggies?", surveysId: 1 },
        { id: 3, question: "do you like steak?", surveysId: 1 },
        { id: 4, question: "do you like hockey?", surveysId: 2 },
        { id: 5, question: "do you like basketball?", surveysId: 2 },
        { id: 6, question: "do you like football?", surveysId: 2 }
      ]);
    });
};
