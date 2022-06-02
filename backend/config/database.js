
const mongoose = require('mongoose');

const MONGO_URI ="mongodb+srv://nitik:nitik123@cluster0.deehx.mongodb.net/?retryWrites=true&w=majority";

const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected");
        });
}

module.exports = connectDatabase;