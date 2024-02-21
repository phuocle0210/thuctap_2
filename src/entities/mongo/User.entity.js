const mongoose = require(".");

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
        minlength: 3,
        maxlength: 50
    },
    username: {
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
        type: String
    },
    password: {
        required: true,
        minlength: 5,
        type: String
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);