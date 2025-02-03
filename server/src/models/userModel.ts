import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt";

const walletSchema = new Schema({
  name: { type: String },
  description: { type: String },
  uuid: { type: String },
  price: { type: String },
  iconUrl: { type: String },
  symbol: { type: String },
  ammount: { type: Number },
  purchasedAt: { type: Number },
  purchaseDate: { type: Date },
});

const userSchema = new Schema(
  {
    name: { type: String, readonly: true, required: true },
    email: { type: String, required: true, readonly: true, unique: true },
    password: { type: String, required: true },
    deposit: { type: Number, readonly: true, required: true, default: 10_000 },
    balance: { type: Number, required: true, default: 10_000 },
    wallet: {
      type: [walletSchema],
      required: true,
      default: [],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPasswords = async function (enteredPassword: string) {
  return bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
