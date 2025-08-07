import { db } from "./connect.js";
const NAME_TABLE = "complaints";

export async function getComplaintsDB() {
  try {
    return db.collection(NAME_TABLE).find().toArray();
  } catch (error) {
    throw error;
  }
}

export async function createComplaintsDB(data) {
  try {
    await db.collection(NAME_TABLE).insertOne(data);
  } catch (error) {
    throw error;
  }
}
