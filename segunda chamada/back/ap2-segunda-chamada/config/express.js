let express = require('express');
let body_parser = require('body-parser')
let path = require('path');

let usuario_routes = require('../app/routes/usuario.router')
let post_routes = require('../app/routes/mensagem.router')

module.exports = function(){
    let app = express();
    app.set('port', 3000);
    app.use(express.static('./public'));
    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended: false}));
    usuario_routes(app);
    post_routes(app);

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    return app;
}

