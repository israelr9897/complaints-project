import { createComplaintsDB } from "../db/dalDB.js";

export async function createComplaint(req, res) {
  try {
    req.body["create_at"] = new Date().toString()
    await createComplaintsDB(req.body);
    res.send({ msg: "added complaint" })
  } catch (error) {
    console.log("create complaint massge error: ", error);
    res.status(500).send({ msg: "create complaint faild " });
  }
}
