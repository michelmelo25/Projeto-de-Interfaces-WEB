let usuario_controller = require('../controllers/usuario');
let post_controller = require('../controllers/post');
let auth_controller = require('../controllers/auth');


module.exports = function(app){
    app.post('/api/usuario/signin', auth_controller.signin);
    app.post('/api/usuario', usuario_controller.insertUsuario);
    app.use('/api/usuario', auth_controller.verifyToken);
    app.get('/api/usuario', usuario_controller.getUsuario);
    app.get('/api/usuario/:id', usuario_controller.getUsuarioByID);
    app.put('/api/usuario/:id', usuario_controller.putUsuario);
    app.delete('/api/usuario/:id/', usuario_controller.deleteUsuario);
    app.get('/api/usuario/:id/posts', usuario_controller.getPostByIdUsuario);
   
}