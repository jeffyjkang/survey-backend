const db = require("../dbConfig");
const table = "answers";

module.exports = {
  // get from db answers table
  get: () => db(table),
  // insert single answer to db answers table
  insert: survey => db(table).insert(survey),
  // update answer in answers table by id
  update: (id, survey) =>
    db(table)
      .where("id", id)
      .update(survey),
  // remove answer from answers table by id
  remove: id =>
    db(table)
      .where("id", id)
      .del()
};
