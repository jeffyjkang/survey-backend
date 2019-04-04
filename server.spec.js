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
  // first entry 201 created status
  describe("surveys endpoint (/surveys)", () => {
    test("should return status 201", async () => {
      const expected = 201;
      const response = await request(server)
        .post("/surveys")
        .send({ title: "testTitle", description: "testDescription" });
      expect(response.status).toEqual(expected);
    });
    // duplicate entry , error
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
});
