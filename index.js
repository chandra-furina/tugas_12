const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/hitung", (req, res) => {
  const a = Number(req.body.a);
  const b = Number(req.body.b);
  const op = req.body.operator;

  let hasil;
  switch (op) {
    case "+":
      hasil = a + b;
      break;
    case "-":
      hasil = a - b;
      break;
    case "*":
      hasil = a * b;
      break;
    case "/":
      hasil = b !== 0 ? a / b : "Tidak bisa dibagi 0";
      break;
  }

  res.send(`
    <h2>Hasil: ${hasil}</h2>
    <a href="/">Kembali</a>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server jalan di port " + PORT);
});
