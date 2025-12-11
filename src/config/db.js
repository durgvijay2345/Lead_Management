const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log(" Connecting to MongoDB...");
    console.log("Using URI:", process.env.MONGO_URI ? "Loaded" : "Missing");

    if (!process.env.MONGO_URI) {
      throw new Error(" MONGO_URI missing in .env file");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(" MongoDB Connection Error:", err.message);
  }
};

module.exports = connectDB;
