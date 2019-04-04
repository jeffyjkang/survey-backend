const db = require("../dbConfig");
const table = "surveys";

module.exports = {
  // get from db surveys table
  get: id => {
    let query = db(table);
    // if id is passed return survey with specified id
    if (id) {
      query = db(table)
        .where("surveys.id", id)
        .first();
      return query;
    }
    return query;
  },
  // insert single survey to db surveys table
  insert: survey => db(table).insert(survey),
  // update survey in surveys table by id
  update: (id, survey) =>
    db(table)
      .where("id", id)
      .update(survey),
  // remove survey from surveys table by id
  remove: id =>
    db(table)
      .where("id", id)
      .del()
};
