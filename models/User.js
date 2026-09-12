import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  email: { 
    type: String, 
    required: [true, "Email is required"], 
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"]
  },
  name: { type: String },
  username: { 
    type: String, 
    required: [true, "Username is required"],
    unique: true,
    minlength: [3, "Username must be at least 3 characters long"]
  },
  profilepic: { type: String },
  coverpic: { type: String },
  razorpayid: { type: String },
  razorpaysecret: { type: String },
}, { 
  timestamps: true // Automatically manages createdAt and updatedAt
});

export default mongoose.models.User || model("User", UserSchema);
