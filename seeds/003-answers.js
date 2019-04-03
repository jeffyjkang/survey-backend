exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("answers")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("answers").insert([
        { id: 1, true: 1, false: 0, questionsId: 1 },
        { id: 2, true: 0, false: 1, questionsId: 2 },
        { id: 3, true: 1, false: 0, questionsId: 3 },
        { id: 4, true: 1, false: 0, questionsId: 4 },
        { id: 5, true: 0, false: 1, questionsId: 5 },
        { id: 6, true: 1, false: 0, questionsId: 6 },
        { id: 7, true: 1, false: 0, questionsId: 1 },
        { id: 8, true: 0, false: 1, questionsId: 2 },
        { id: 9, true: 1, false: 0, questionsId: 3 },
        { id: 10, true: 1, false: 0, questionsId: 4 },
        { id: 11, true: 0, false: 1, questionsId: 5 },
        { id: 12, true: 1, false: 0, questionsId: 6 },
        { id: 13, true: 1, false: 0, questionsId: 1 },
        { id: 14, true: 0, false: 1, questionsId: 2 },
        { id: 15, true: 1, false: 0, questionsId: 3 },
        { id: 16, true: 1, false: 0, questionsId: 4 },
        { id: 17, true: 0, false: 1, questionsId: 5 },
        { id: 18, true: 1, false: 0, questionsId: 6 },
        { id: 19, true: 1, false: 0, questionsId: 1 },
        { id: 20, true: 0, false: 1, questionsId: 2 },
        { id: 21, true: 1, false: 0, questionsId: 3 },
        { id: 22, true: 1, false: 0, questionsId: 4 },
        { id: 23, true: 0, false: 1, questionsId: 5 },
        { id: 24, true: 1, false: 0, questionsId: 6 },
        { id: 25, true: 1, false: 0, questionsId: 1 },
        { id: 26, true: 0, false: 1, questionsId: 2 },
        { id: 27, true: 1, false: 0, questionsId: 3 },
        { id: 28, true: 1, false: 0, questionsId: 4 },
        { id: 29, true: 0, false: 1, questionsId: 5 },
        { id: 30, true: 1, false: 0, questionsId: 6 }
      ]);
    });
};
