const db = require("../dbConfig");
const table = "questions";

module.exports = {
  // get from db questions table
  // if id is passed, return questions with sum of yes and no answers
  get: id => {
    let query = db(table);
    if (id) {
      query = query
        .where("questions.id", id)
        .first()
        .join("answers", "answers.questionsId", "=", "questions.id")
        .select("questions.id", "questions.question")
        .sum({ totalYes: "answers.yes" })
        .sum({ totalNo: "answers.no" });
    }
    return query;
  },
  // insert single question to db questions table
  insert: survey => db(table).insert(survey),
  // update question in questions table by id
  update: (id, survey) =>
    db(table)
      .where("id", id)
      .update(survey),
  // remove question in questions table by id
  remove: id =>
    db(table)
      .where("id", id)
      .del()
};
