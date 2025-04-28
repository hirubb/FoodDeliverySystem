const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const AdminSchema = new mongoose.Schema(
    {
      first_name: { type: String, required: true },
      last_name: { type: String, required: true },
      email: {type: String,required: true,unique: true,match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email address'],},
      username:{ type: String, required: true,unique: true },
      password: { type: String, required: true },
      phone: { type: String, required: true },
      profile_image: {required: false ,type: String },
      role: { type: String, default: "Admin"},
    },
    { timestamps: true }
  );
  

  AdminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });
  
  AdminSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  module.exports = mongoose.model("Admin", AdminSchema);