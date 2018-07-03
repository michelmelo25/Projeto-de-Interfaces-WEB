let Usuario = require('../models/usuario');
let Post = require('../models/post');
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');

function erro(res, msg = undefined, status = 500){
    return function(error){
        res.status(status).send(msg);
    }
}

function sucesso(res, status = 200){
    return function(body){
        res.status(status).json(body);
    }
}

module.exports.getUsuario = function(req, res){
    let promise = Usuario.find();
    if(req.query.nome){
        let nome = new RegExp(req.query.nome, "i");
        promise = promise.find({'nome': nome});        
    }
    if(req.query.email){
        promise = promise.find({'email': req.query.email});
    }
    promise.then(sucesso(res)).catch(erro(res, "Nao a Usuario"));
}

module.exports.insertUsuario = function(req, res){
    let user = {
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req.body.senha, 10)
    }

    console.log(user);
    let promise = Usuario.create(user);
    promise.then(sucesso(res)).catch(erro(res, "Nao foi possivel inserir usuario"));
}

module.exports.getUsuarioByID = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();
    promise.then(sucesso(res)).catch(erro(res, "usuario nao encontrado"));
}

module.exports.getPostByIdUsuario = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();

    promise.then(
        function(usuario){
            let promise1 = Post.find({'uid': id}).exec();
            promise1.then(
                function(body){
                    // res.json(posts);
                    let posts = [];
                    for(let i in body){
                        posts.push({
                            _id: body[i]._id,
                            texto: body[i].texto,
                            like: body[i].likes
                        });
                    }
                    sucesso(res);
                }
            ).catch(erro(res, "Post Nao Encontrado"));
        }
    ).catch(erro(res, "Usuario Nao Encontrado"));
}

module.exports.deleteUsuario = function(req, res){
    let id = req.params.id;
    let promise = Usuario.findById(id).exec();

    promise.then(
        function(user){
            let promise1 = Usuario.remove({'_id': user._id}).exec();
            promise1.then(
                function(user){
                    sucesso(res);
                    // res.send('Usuario Removido');
                }
            ).cath(erro(res, "Nao foi possivel remover"));
        }
    ).cath(erro(res, "Uruario nao Encontrado, Nao Removido"));
}

module.exports.putUsuario = function(req, res){
    let id = req.params.id;
    let promiseuser = Post.findById(id).exec();
    let token = req.query.token;
    let perm = jwt.decode(token);
    if(perm.id === id){
        let promise = Usuario.findByIdAndUpdate(id, req.body).exec();    
        promise.then(sucesso(res)).catch(erro(res, "Nao foi possivel editar o usuario"));
    }
    else{
        res.status(401).send("Sem permissao");
    }

}