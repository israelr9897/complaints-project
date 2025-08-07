import express from "express";
import { config } from "dotenv";
import { configRout } from "./routs/configRout.js";
config();
const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configRout(app);
app.use(express.static("./public"));

app.listen(PORT, () => {
  console.log("server is ronning on port:" + PORT);
});
