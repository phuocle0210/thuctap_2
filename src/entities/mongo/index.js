const mongoose = require("mongoose");

(async function(index = 1) {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/db_test');
    } catch {
        if(index < 5) {
            return await connect(++index);
        }

        throw new Error("Khong ket noi duoc database");
    }
})();

module.exports = mongoose;