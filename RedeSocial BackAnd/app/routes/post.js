let postController = require('../controllers/post');
let authController = require('../controllers/auth');

module.exports = function(app) {
    app.use('/api/posts', authController.verifyToken);
    app.get('/api/posts', postController.getPosts);
    app.get('/api/posts/:id', postController.getPostById);
    app.post('/api/posts', postController.insertPost);
    app.put('/api/posts/:id', postController.putPost);
    app.delete('/api/posts/:id', postController.deletePost);
    app.get('/api/posts/:id/usuario', postController.getUsuarioByPost);
}