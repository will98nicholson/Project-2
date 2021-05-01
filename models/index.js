const User = require('./User');
const Post = require('./Post');
const Shows = require('./shows')
// const Comment = require('./Comment');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

 User.hasMany(Comment, {
     foreignKey: 'user_id'
 });
 Post.hasMany(Comment, {
     foreignKey: 'post_id'
 });
 Shows.hasMany(Comment, {
    foreignKey: 'id'
 })


module.exports = { User, Post, Shows }