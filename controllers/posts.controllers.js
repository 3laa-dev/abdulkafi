
const Post = require("../models/Post.model");
const getAllPosts = (async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
})
const addPost = (async (req, res) => {
    try {
        const { Type, Title, Description, ImagePath, Price } = req.body;
        const newPost = new Post({ Type, Title, Description, ImagePath, Price });
        
        newPost.ImagePath = req.file ? req.file.path : null;
        await newPost.save();
        res.json(newPost);
    } catch {
        res.json({ newPost: null })
    }
}

)
const deletePost = async (req, res) => {
 try {
    const { Id } = req.params;

    const deletedPost = await Post.findByIdAndDelete(Id);

    if (!deletedPost) {
      return res.status(404).json({
        isDeleted: false,
        message: "Post not found"
      });
    }

    res.json({
      isDeleted: true
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      isDeleted: false,
      message: "Server error"
    });
  }
}
module.exports = { getAllPosts, addPost , deletePost};
