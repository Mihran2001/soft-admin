const express = require('express');
const router = express.Router();
const userCtr = require('../../app/controllers/user');
const postCtr = require('../../app/controllers/post');
const newsCtr = require('../../app/controllers/news');
const { adminAuth } = require('../middlewares/authorization');

router.get('/users', adminAuth, userCtr.getUsers);
router.get('/user/:id', adminAuth, userCtr.getUser);

/* Posts */

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


/* News */

// get allNews
router.get('/news', adminAuth, newsCtr.getAllNews);

// get news
router.get('/news/:id', adminAuth, newsCtr.getNews);

// create news
router.post('/news', adminAuth, newsCtr.createNews);

// delete news
router.delete('/news/:id', adminAuth, newsCtr.deleteNews);

// update news
router.put('/news/:id', adminAuth, newsCtr.updateNews);






module.exports = router;
