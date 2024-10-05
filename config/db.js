// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             // useNewUrlParser: true,
//             // useUnifiedTopology: true,
//             connectTimeoutMS: 30000,  // 30 seconds connection timeout
//             socketTimeoutMS: 45000    // 45 seconds socket timeout
//         });
//         // console.log('MongoDB connected...');
//     } catch (err) {
//         // console.error('Error connecting to MongoDB:', err.message);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

const dbUrl =
  "mongodb+srv://ghartaktech04:KGIcB8NjC4Cd9rx3@youthadda.9khcl.mongodb.net/ghartaktech04";
mongoose.connect(dbUrl, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
