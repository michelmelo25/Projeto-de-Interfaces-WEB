let Usuario_controller = require('../controllers/usuario.controller');
let Auth_controller = require('../controllers/auth');

module.exports = function(app){
    app.post('/api/usuarios', Usuario_controller.inserirUsuario);
    app.post('/api/usuarios/singin', Auth_controller.signin);  
    app.get('/api/usuario', Usuario_controller.getusuarios);   
}

// {
// 	"nick": "shell",
// 	"email": "michel@mail.com",
// 	"senha": "12345"
// }
