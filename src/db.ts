import { Schema, connect, model } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI: string = process.env.MONGODB_URI ?? "";

if (MONGODB_URI === "") {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let conn: any = null;

async function dbConnect() {
  if (!conn) conn = await connect(MONGODB_URI);
  return conn;
}

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  name: string;
  email: string;
  avatar?: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: String,
});

// 3. Create a Model.
export const User = model<IUser>("User", userSchema);

export default dbConnect;
