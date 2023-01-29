import express from "express";
import path from "path";
import dotenv from "dotenv";

const app = express();
const env = dotenv.config().parsed;

const PORT = env.PORT || "3000";

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

try {
  app.listen(PORT);
  console.log(`Listening at port ${PORT}`);
} catch (e) {
  console.error("Error:");
  console.error(e);
}
