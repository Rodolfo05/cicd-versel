const request = require("supertest");
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json({ message: "Hola, test pasado con exito." }));

app.post("/multiplicar", (req, res) => {
    const { a, b } = req.body;
    res.json({ resultado: a * b });
});

describe("Prubas del backend", () => {

    test("GET / debe responder mensaje adecuado", async () => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("Hola, test pasado con exito.");
    });

    test("POST /multiplicar debe devolver la multiplicacion correcta", async () => {
        const res = await request(app).post("/multiplicar").send({ a: 5, b: 6 });
        expect(res.statusCode).toBe(200);
        expect(res.body.resultado).toBe(30);
    });
})