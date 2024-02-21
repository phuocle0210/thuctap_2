const userRepo = require("../repositories/mongo/user.repo");
const token = require("../utils/token");

module.exports = {
    login: async function(username, password) {
        const user = await userRepo.getUser({ username, password });
        
        if(user === null)
            throw new Error("user invalid");

        return token.createToken({ id: user._id });
    },
    register: async function(name, username, password) {
        const user = await userRepo.getUser({ username });
        if(user !== null)
            throw new Error("user exists");

        const newUser = await userRepo.create({ name, username, password });

        return token.createToken({ id: newUser._id });
    }
}