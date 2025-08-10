import { createComplaintsDB, getAllComplaintsDB } from "../db/dalDB.js";
import { config } from "dotenv";
import { formatDate } from "./utilits.js";
config();

export async function checkAdmin(req, res) {
  const { password } = req.body;
  if (password !== process.env.PASS_ADMIN)
    return res.send({ msg: "invilde password" });
  const data = await getAllComplaintsDB();
  res.render('adminPage', { data });
}

export async function createComplaint(req, res) {
  try {
    req.body["create_at"] = formatDate(new Date());
    await createComplaintsDB(req.body);
    res.redirect("thankPage.html");
  } catch (error) {
    console.log("create complaint massge error: ", error);
    res.status(500).send({ msg: "create complaint faild " });
  }
}
