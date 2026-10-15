
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "10kb" }));

app.use(cors({
  origin: "https://pardoes1.github.io"
}));

app.get("/", (req, res) => {
  res.json({
    name: "Magische Heuvel API",
    status: "running"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Magische Heuvel API started on port ${PORT}`);
});

