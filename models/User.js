import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }, // plaintext if using NextAuth credentials
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
