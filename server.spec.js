const request = require("supertest");
const { server } = require("./server");

describe("server.js", () => {
  // root endpoint, checks to make sure surver is up and running
  describe("root endpoint (/)", () => {
    test("should return server running", async () => {
      const expected = "<h1>Server Running<h1>";
      const response = await request(server).get("/");
      expect(response.text).toEqual(expected);
    });
    // return type text
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
  // retrieving the results of a survey by id
  //retrun status 200, ok
  test("should return status 200", async () => {
    const expected = 200;
    const response = await request(server).get("/surveys/results/1");
    expect(response.status).toEqual(expected);
  });
  // return status 404, when id does not exist
  test("should return status 404", async () => {
    const expected = 404;
    const response = await request(server).get("/surveys/1000");
    expect(response.status).toEqual(expected);
  });
  // endpoint questions
  //
  describe("questions endpoint (/questions)", () => {
    // return status 200, ok
    test("should return status code 200", async () => {
      const expected = 200;
      const response = await request(server).get("/questions");
      expect(response.status).toEqual(expected);
    });
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
    // should return status 400 when no question Id is given
    test("should return status code 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/questions")
        .send({ question: "testQuestion1", surveysId: "" });
      expect(response.status).toEqual(expected);
    });
  });
  // return status 200, ok
  test("should return status code 200", async () => {
    const expected = 200;
    const response = await request(server).get("/questions/1");
    expect(response.status).toEqual(expected);
  });
  // return status 404 when no id exists
  test("should return status code 404", async () => {
    const expected = 404;
    const response = await request(server).get("/questions/100");
    expect(response.status).toEqual(expected);
  });
  // endpoint answers
  //
  describe("answers endpoint (/answers)", () => {
    // return status 200, ok
    test("should return status code 200", async () => {
      const expected = 200;
      const response = await request(server).get("/answers");
      expect(response.status).toEqual(expected);
    });
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
    // if field has integer value greater than 1
    test("should return status 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/answers")
        .send({ yes: 2, no: 0, questionsId: 1 });
      expect(response.status).toEqual(expected);
    });
    // if fields has integer value greater than 1
    test("should return status 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/answers")
        .send({ yes: 0, no: 3, questionsId: 2 });
      expect(response.status).toEqual(expected);
    });
    // if both fields have value of 1
    test("should return status 400", async () => {
      const expected = 400;
      const response = await request(server)
        .post("/answers")
        .send({ yes: 1, no: 1, questionsId: 2 });
      expect(response.status).toEqual(expected);
    });
  });
});
