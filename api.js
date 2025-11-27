const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
const frases = [
  { id: 1, texto: "El conocimiento se comparte" },
  { id: 2, texto: "Programar es resolver problemas" },
];
app.get("/frases", (req, res) => res.json(frases));
app.post("/frases", (req, res) => {
  const nueva = { id: frases.length + 1, texto: req.body.texto };
  frases.push(nueva);
  res.status(201).json(nueva);
});
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
