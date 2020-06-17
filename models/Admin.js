const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: Number, //1 => super admin => Can create a new admin's account for an other admin
    required: true,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;
