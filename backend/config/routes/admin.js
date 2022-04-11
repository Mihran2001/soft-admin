const express = require('express');
const router = express.Router();
const userCtr = require('../../app/controllers/user');
const postCtr = require('../../app/controllers/post');
const { adminAuth } = require('../middlewares/authorization');

router.get('/users', adminAuth, userCtr.getUsers);
router.get('/user/:id', adminAuth, userCtr.getUser);

// get posts
router.get('/posts', adminAuth, postCtr.getPosts);

// get post
router.get('/post/:id', adminAuth, postCtr.getPost);

// create post
router.post('/post', adminAuth, postCtr.createPost);

// delete post
router.delete('/post/:id', adminAuth, postCtr.deletePost);

// update post
router.put('/post/:id', adminAuth, postCtr.updatePost);






module.exports = router;
