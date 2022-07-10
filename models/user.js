const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            value: ""
        },
        lastname: {
            type: String,
            value: ""
        },
        birthDate: {
            type: Date,
            value: "2022/03/23"
        },
        location: {
            type: String,
            value: ""
        },
        email: {
            type: String,
            value: ""
        },
        phoneNumber: {
            type: String,
            value: ""
        },
        job: {
            type: String,
            value: ""
        },
        permission: {
            type: String,
            value: ""
        },
        idFirebase: {
            type: String
        },
        fk_company: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;