import mongoose, { Mongoose } from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL;

interface MongooseConnection {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseConnection | undefined = (global as typeof global & { mongoose: MongooseConnection }).mongoose;

if (!cached) {
    cached = (global as typeof global & { mongoose: MongooseConnection }).mongoose = {
        conn: null,
        promise: null
    };
}

export const connectToDatabase = async () => {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');

    cached.promise =
        cached.promise ||
        mongoose.connect(MONGODB_URL, {
            dbName: 'imaginify', bufferCommands: false
        })

    cached.conn = await cached.promise;

    return cached.conn;
}