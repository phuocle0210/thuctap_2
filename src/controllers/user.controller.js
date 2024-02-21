const userAccess = require("../businesses/user.access");
const lodash = require("lodash");

module.exports = {
    login: async function(req, res) {
        try {
            const { username, password } = req.body;
            if(lodash.isUndefined(username))
                return res.status(400).json({ message: "username invalid!" });

            if(lodash.isUndefined(password))
                return res.status(400).json({ message: "password invalid!" });

            return res.json({
                message: "login success",
                data: {
                    token: await userAccess.login(username, password)
                }
            })
        } catch {
            return res.status(500).json({ message: "server error!" });
        }
    },
    register: async function(req, res) {
        try {
            const { username, name, password } = req.body;

            if(lodash.isUndefined(username))
                return res.json({ message: "username invalid!" });

            if(lodash.isUndefined(name))
                return res.json({ message: "name invalid!" });

            if(lodash.isUndefined(password))
                return res.json({ message: "password invalid!" });

            return res.json({
                message: "register success",
                data: {
                    token: await userAccess.register(name, username, password)
                }
            }); 
        } catch(ex) {
            if(ex instanceof Error)
                return res.status(500).json({ message: ex.message });
 
            return res.status(500).json({ message: "server error" });
        }
    }
}