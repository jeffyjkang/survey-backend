const db = require("../dbConfig");
const table = "questions";

module.exports = {
  // get from db questions table
  get: () => db(table),
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
