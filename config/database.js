const mongoose = require("mongoose");
let conn = null;
const connectDB = async () => {
  if (conn === null) {
    try {
      conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB Connected");
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
  return conn; // <-- always return conn
};

module.exports = connectDB;
