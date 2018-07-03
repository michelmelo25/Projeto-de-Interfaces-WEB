let Mensagem = require('../models/mensagem.model');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

function erro(res, msg = undefined, status = 500){
    return function(error){
        res.status(status).send(msg);
    }
}

function sucesso(res, status = 201){
    return function(body){
        let mensenger = {
            _id: body._id,
            remetente_id : body.remetente_id,
            destinatario_id: body.destinatario_id,
            tesxto: body.texto
        }
        res.status(status).json(mensenger);
    }
}

module.exports.getMensagens = function(req,res){
    let token = req.query.token;
    let perm = jwt.decode(token);

    if(req.body.sender){
        let promise =  Mensagem.find({'remetente_id': perm._id});
        promise.then(sucesso(res)).catch(erro(res));
    }else{
        let promise =  Mensagem.find({'destinatario_id': perm._id});
        promise.then(sucesso(res)).catch(erro(res));
    }
}

module.exports.inserirMensagem = function(req, res){
    let load = jwt.decode(req.query.token);

    let mensagem = {
        remetente_id: load.id,
        destinatario_id: req.body.id,
        texto: req.body.texto
    }

    let promise = Mensagem.create(mensagem);

    promise.then(sucesso(res)).catch(erro(res,'Nao foi possivel armasenar mensagem'));
}

module.exports.deleteMensagem = function(req,res){
    let id = req.params.id;
    let promise = Mensagem.findById(id).exec();
    let token = req.query.token;
    let perm = jwt.decode(token);
    
    promise.then(
        function(mensa){
            if(perm.id === mensa.remetente_id){
               let promiserem = Mensagem.findByIdAndRemove(mensa._id).exec();
               promiserem.then(sucesso(res)).catch(erro(res,'mensagem nao removida'));
            }
        }
    ).catch(erro(res,'mensagem nao encontrada'));

    
}