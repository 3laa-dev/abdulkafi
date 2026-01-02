const express = require('express');
const router = express.Router();
const Controllers = require('../Controllers/posts.controllers');
const { Guid } = require('js-guid');
const multer = require('multer');
const verifyToken = require('../Utils/verifyToken');

// ==================
// MULTER
// ==================
const diskStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    const fileName = Guid.newGuid().toString();
    cb(null, `${fileName}.${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image"))
    cb(null, true);
  else
    cb(new Error("Not an image"), false);
};

const upload = multer({ storage: diskStorage, fileFilter });

// ==================
// ROUTES
// ==================
router.get("/getAllPosts", Controllers.getAllPosts);

router.post(
  "/addPost",
  verifyToken,
  upload.single("ImagePath"),
  Controllers.addPost
);

router.delete(
  "/deletePost/:Id",
  verifyToken,
  Controllers.deletePost
);

module.exports = router;
