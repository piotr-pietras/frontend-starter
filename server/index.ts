import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

try {
  app.listen(3000);
  console.log("Listening at port 3000");
} catch (e) {
  console.error("Error:");
  console.error(e);
}
