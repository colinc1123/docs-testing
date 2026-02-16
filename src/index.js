const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY || "dev-key";

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/api/data", (req, res) => {
  const key = req.headers["x-api-key"];
  if (key !== API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  res.json({
    data: ["alpha", "beta", "gamma"]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
