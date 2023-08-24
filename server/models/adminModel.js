const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const adminModel = mongoose.Schema(
    {
        organisationName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

adminModel.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

adminModel.pre('save', async function (next) {
    if (!this.isModified) {
        next()
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

})

const Admin = mongoose.model("Admin", adminModel);

module.exports = Admin;