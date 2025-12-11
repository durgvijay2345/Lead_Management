const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Load env file
dotenv.config();

// Debug log
console.log(" ENV Loaded:", process.env.MONGO_URI ? "Yes" : "No");

// Connect database
connectDB();

const app = express();

// Middlewares
app.use(express.json());

// Models loaded logs (your custom logs)
console.log("Lead model:  Available");
console.log("User model:  Available");
console.log("Source model:  Available");
console.log("Followup model:  Available");
console.log("Activity model:  Available");

// Load Routes
app.use('/api/leads', require("./routes/leadRoutes"));
app.use('/api/users', require("./routes/userRoutes"));
app.use('/api/sources', require("./routes/sourceRoutes"));
app.use('/api/followups', require("./routes/followupRoutes"));
app.use('/api/activities', require("./routes/activityRoutes"));

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
