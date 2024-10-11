const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true, minlength: 6 },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    address:{ type: String, required: true },
    balance: {
      type: Number,
      default: 0.00
  },
    role: {
      type: String,
      enum: ["tenant", "landlord", "admin"],
      required: true,
    },
    paymentIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment", // Liên kết với mô hình Payment
    }],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
