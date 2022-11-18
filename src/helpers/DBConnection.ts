import PocketBase from "pocketbase";
import { errorMsg } from "./messages";

const DBConnection = async () => {
  try {
    const db = new PocketBase(process.env.DB_IP);
    await db.admins.authViaEmail(
      process.env.DB_EMAIL as string,
      process.env.DB_PASS as string
    );
    return db;
  } catch (err) {
    errorMsg("Something went wrong during connecting to DB", err);
  }
};

export default DBConnection;
