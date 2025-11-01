const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Funcionando." });
})

app.post("/sumar", (req, res) => {

    const { a , b} = req.body;

    res.json({ resultado: a + b});
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));