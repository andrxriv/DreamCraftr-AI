// clerk ID, email, username, photo, firstName, lastName, planId, creditBalance
import { Schema, model, models } from "mongoose";

// export interface IUser extends Document{
//     clerkId: string;           // Clerk ID is required and unique
//     email: string;             // Email is required and unique
//     username: string;          // Username is required and unique
//     photo: string;             // Photo URL is required
//     firstName?: string;        // First name is optional
//     lastName?: string;         // Last name is optional
//     planId?: number;           // Plan ID defaults to 1
//     creditBalance?: number;    // Credit balance defaults to 10
// }

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    photo: {type: String, required: true},
    firstName: {type: String},
    lastName: {type: String},
    planId: {type: Number, default: 1},
    creditBalance: {type: Number, default: 10},
});

const User = models?.User  || model("User", UserSchema);

export default User;