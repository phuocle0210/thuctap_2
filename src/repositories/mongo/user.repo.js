const UserModel = require("../../entities/mongo/User.entity");

module.exports.create = async function(data) {
    const user = await UserModel.create(data);
    return user;
}

module.exports.insertMany = async function(data) {
    const usersInsert = await UserModel.insertMany(data);
    await usersInsert.save();

    return usersInsert;
}

module.exports.getUser = async function(data) {
    return await UserModel.findOne(data);
}

module.exports.getUsers = async function(data) {
    return await UserModel.find(data);
}

module.exports.updateUser = async function(data) {
    return await UserModel.updateOne(data);
}