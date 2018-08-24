const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = "mongodb://localhost:27017/codepostnet";

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if(err) {
        console.log('Connection error');
    }
});

router.get('/posts', (req, res) => {
    console.log('Requesting posts');
    post.find({})
        .exec(function(err, posts){
            if (err) {
                console.log('Error getting the posts');
            } else{
                res.json(posts);
            }
        });
});

router.get('/details/:id', (req, res) => {
    console.log('Requesting post');
    post.findById(req.params.id)
        .exec(function(err, post){
            if (err) {
                console.log('Error getting the post');
            } else{
                res.json(post);
            }
        });
});

module.exports = router;