import express from "express";
import path from "path";
import dotenv from "dotenv";
import { addTestPost } from "./test-feature";

const app = express();
const env = dotenv.config().parsed;

const PORT = env.FRONTEND_PORT || "3000";
const STATIC_DIR = path.join(__dirname, "../dist");

app.use(express.json());
app.use(express.static(STATIC_DIR));
app.get("/*", function (req, res) {
  res.sendFile(path.join(STATIC_DIR, "index.html"));
});

//Test post for TestFeature
addTestPost(app);

try {
  app.listen(PORT);
  console.log(`Listening at port ${PORT}`);
} catch (e) {
  console.error("Error:");
  console.error(e);
}
