import mongoose from "mongoose";

const globalAny = global as any;
const cached = globalAny.mongoose || { conn: null, promise: null };
// Persist cache across hot reloads in development
globalAny.mongoose = cached;

export const connectToDatabase = async (uri?: string) => {
  const MONGODB_URI = uri || process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;

  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI is missing! Set it in your environment (e.g., .env.local).");
  }

  if (!cached.promise) {
    mongoose.set("strictQuery", true);
    cached.promise = mongoose.connect(MONGODB_URI);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}