const Express = require("express");

const PORT = 3000;
const HOST = '0.0.0.0';

const app = Express();
app.get("/", (req, res) => {
  res.send("HELLO");
});

app.listen(PORT, HOST, () => {
  console.log(`Server runs on ${HOST}:${PORT}...`);
});
