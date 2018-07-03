let Usuario = require('../models/usuario.model');
let bcrypt = require('bcrypt');

function erro(res, msg = undefined, status = 500){
    return function(error){
        res.status(status).send(msg);
    }
}

function sucesso(res, status = 201){
    return function(body){
        // let user = {
        //     _id: body._id,
        //     nick : body.nick,
        //     email: body.email
        // }
        res.status(status).json(body);
    }
}

module.exports.inserirUsuario = function(req,res){
    let user = {
        nick: req.body.nick,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    }

    console.log(user);
    let promise = Usuario.create(user);

    promise.then(sucesso(res)).catch(erro(res,'usuario nao cadastrado'));
}

module.exports.getusuarios = function(req,res){
    let promise = Usuario.find();

    promise.then(sucesso(res)).catch(erro(res));
}