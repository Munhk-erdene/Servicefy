import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "нэвтрэх нэрээ оруулна уу"],
    },
    password: {
      type: String,
      required: [true, "нууц үгээ оруулна уу"],
      minLength: [8, "хэтэрхий богино байна , 8 н оронтой байна"],
    },
    role: {
      type: String,
      enum: ["normal", "admin"],
      default: "normal",
      required: [true, "please specify user role"],
    },
    post: {
      type: Array,
    },
 
  },
  { toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.virtual("items", {
  ref: "item",
  localField: "_id",
  foreignField: "user_id",
});

UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(this.password, salt);
    this.password = hashPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("user", UserSchema);
export default User;