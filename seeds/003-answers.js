exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("answers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("answers").insert([
        { id: 1, yes: 1, no: 0, questionsId: 1 },
        { id: 2, yes: 0, no: 1, questionsId: 2 },
        { id: 3, yes: 1, no: 0, questionsId: 3 },
        { id: 4, yes: 1, no: 0, questionsId: 4 },
        { id: 5, yes: 0, no: 1, questionsId: 5 },
        { id: 6, yes: 1, no: 0, questionsId: 6 },
        { id: 7, yes: 1, no: 0, questionsId: 1 },
        { id: 8, yes: 0, no: 1, questionsId: 2 },
        { id: 9, yes: 1, no: 0, questionsId: 3 },
        { id: 10, yes: 1, no: 0, questionsId: 4 },
        { id: 11, yes: 0, no: 1, questionsId: 5 },
        { id: 12, yes: 1, no: 0, questionsId: 6 },
        { id: 13, yes: 1, no: 0, questionsId: 1 },
        { id: 14, yes: 0, no: 1, questionsId: 2 },
        { id: 15, yes: 1, no: 0, questionsId: 3 },
        { id: 16, yes: 1, no: 0, questionsId: 4 },
        { id: 17, yes: 0, no: 1, questionsId: 5 },
        { id: 18, yes: 1, no: 0, questionsId: 6 },
        { id: 19, yes: 1, no: 0, questionsId: 1 },
        { id: 20, yes: 0, no: 1, questionsId: 2 },
        { id: 21, yes: 1, no: 0, questionsId: 3 },
        { id: 22, yes: 1, no: 0, questionsId: 4 },
        { id: 23, yes: 0, no: 1, questionsId: 5 },
        { id: 24, yes: 1, no: 0, questionsId: 6 },
        { id: 25, yes: 1, no: 0, questionsId: 1 },
        { id: 26, yes: 0, no: 1, questionsId: 2 },
        { id: 27, yes: 1, no: 0, questionsId: 3 },
        { id: 28, yes: 1, no: 0, questionsId: 4 },
        { id: 29, yes: 0, no: 1, questionsId: 5 },
        { id: 30, yes: 1, no: 0, questionsId: 6 }
      ]);
    });
};
