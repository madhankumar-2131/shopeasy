const request = require('supertest');
const { app, server } = require('../app'); // ✅ Correct import

describe("GET /", () => {
    it("Should return 200 status and the correct message", async () => {
        const response = await request(app).get("/");
        expect(response.status).toBe(200); // ✅ Check status
        expect(response.text).toBe("Hello, ShopEasy by Madhan...🚀"); // ✅ Check message
    });
});

// ✅ Close the server after all tests
afterAll((done) => {
    server.close(done);
});
