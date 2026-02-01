const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 CI/CD Pipeline Working Successfully!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
