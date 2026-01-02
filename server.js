const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postsRouter = require("./Routers/Posts.router");
const adminRouter = require("./Routers/Admin.router");
const cors = require("cors");
const path = require("path");

// ==================
// DB
// ==================
mongoose.connect("mongodb+srv://alaahhee05:alaa123@cluster0.uybyzg0.mongodb.net/abdShop?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.error(err.message));

// ==================
// CORS
// ==================
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));


app.options(/.*/, cors());

// ==================
// BODY
// ==================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ==================
// STATIC
// ==================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ==================
// ROUTES
// ==================
app.use("/api/posts", postsRouter);
app.use("/api/admin", adminRouter);

// ==================
// ERROR HANDLER (🔥 مهم)
// ==================
app.use((err, req, res, next) => {
  console.error(err);

  res.status(400).json({
    success: false,
    message: err.message || "Server Error"
  });
});


// ==================
// SERVER
// ==================
app.listen(7777, () => {
  console.log("Server running on port 7777");
});
