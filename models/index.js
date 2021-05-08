const User = require('./User');
const Post = require('./Post');
const Shows = require('./shows')
// const Comment = require('./Comment');

// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

//  User.hasMany(Comment, {
//      foreignKey: 'user_id'
//  });
//  Post.hasMany(Comment, {
//      foreignKey: 'post_id'
//  });
//  Shows.hasMany(Comment, {
//     foreignKey: 'id'
//  })
//if we had time we were going to add comment boards for the users to discuss


module.exports = { User, Post, Shows }