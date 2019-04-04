const request = require("supertest");
const { server } = require("./server");

describe("server.js", () => {
  describe("root endpoint (/)", () => {
    test("should return server running", async () => {
      const expected = "<h1>Server Running<h1>";
      const response = await request(server).get("/");
      expect(response.text).toEqual(expected);
    });
    test("should return type text", async () => {
      const expected = "text/html";
      const response = await request(server).get("/");
      expect(response.type).toEqual(expected);
    });
  });
  // endpoint surveys
  //
  describe("surveys endpoint (/surveys)", () => {
    // first entry 201 created status
    test("should return status 201", async () => {
      const expected = 201;
      const response = await request(server)
        .post("/surveys")
        .send({ title: "testTitle", description: "testDescription" });
      expect(response.status).toEqual(expected);
    });
    // duplicate entry , error title must be unique
    test("should return status 500", async () => {
      const expected = 500;
      const response = await request(server)
        .post("/surveys")
        .send({ title: "testTitle", description: "testDescription" });
      expect(response.status).toEqual(expected);
    });
    // type of data returned is app json
    test("should return app json", async () => {
      const expected = "application/json";
      const response = await request(server)
        .post("/surveys")
        .send({ title: "testTitle8", description: "testDescription8" });
      expect(response.type).toEqual(expected);
    });
    // status 400 when no title
    test("should return status 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/surveys")
        .send({ title: "", description: "testDescription1" });
      expect(response.status).toEqual(expected);
    });
    // retrieving a survey by id
    // return status 200, ok
    test("should return status 200", async () => {
      const expected = 200;
      const response = await request(server).get("/surveys/1");
      expect(response.status).toEqual(expected);
    });
    // get type from id
    test("should be type app json", async () => {
      const expected = "application/json";
      const response = await request(server).get("/surveys/1");
      expect(response.type).toEqual(expected);
    });
    // return error when no id exist
    test("should return status 404", async () => {
      const expected = 404;
      const response = await request(server).get("/surveys/10000");
      expect(response.status).toEqual(expected);
    });
  });
  // endpoint questions
  //
  describe("questions endpoint (/questions)", () => {
    // return status 201 created question
    test("should return status code 201", async () => {
      const expected = 201;
      const response = await request(server)
        .post("/questions")
        .send({ question: "testQuestion", surveysId: 2 });
      expect(response.status).toEqual(expected);
    });
    // should return status 400 when no question is given
    test("should return status code 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/questions")
        .send({ question: "", surveysId: 2 });
      expect(response.status).toEqual(expected);
    });
    // should return status 400 when no surveysId is given
    test("should return status code 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/questions")
        .send({ question: "testQuestion1", surveysId: "" });
      expect(response.status).toEqual(expected);
    });
  });
  // endpoint answers
  //
  describe("answers endpoint (/answers)", () => {
    // return status 201 created answer
    test("should return status code 201", async () => {
      const expected = 201;
      const response = await request(server)
        .post("/answers")
        .send({ yes: 1, no: 0, questionsId: 1 });
      expect(response.status).toEqual(expected);
    });
    // return status 400 when no questionsId
    test("should return status code 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/answers")
        .send({ yes: 0, no: 1, questionsId: "" });
      expect(response.status).toEqual(expected);
    });
  });
});
