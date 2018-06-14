let Post = require('../models/post');
let Usuario =  require('../models/usuario');
let auth = require('../controllers/auth');
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

module.exports.getPosts = function (req,res){
    let promise = Post.find().exec();

    promise.then(
        function(posts){
            res.json(posts);
        }
    ).catch(erro(res));
}

module.exports.getPostById = function(req,res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();

    promise.then(
        function(post){
            res.json(post);
        }
    ).catch(erro(res));;
}

module.exports.insertPost = function(req,res){
    let load = jwt.decode(req.query.token);
    let post = {
        texto: req.body.texto,
        likes: req.body.likes,
        uid: load.id
    }
    let promise = Post.create(post).exect();
    
    promise.then(sucesso(res)).catch(erro(res));
}

module.exports.putPost = function(req,res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    let token = req.query.token;
    let perm = jwt.decode(token);
    let post = {};

    if(req.params.texto){
        post.texto = req.params.texto;
    }
    if(req.params.like){
        post.like = req.params.like;
    }

    promise.then(
        function(post){
            if(perm.id === post.uid){
                let promiseEd = Post.findByIdAndUpdate(id, post).exec();
                promiseEd.then(sucesso(res)).catch(erro(res));
            }
        }
    ).erro(res);
}

module.exports.deletePost = function(req,res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    let token = req.query.token;
    let perm = jwt.decode(token);

    promise.then(
        function(post){
            if(perm.id === post.uid){
                let promiseEd = Post.findByIdAndRemove(id, post).exec();
                promiseEd.then(sucesso(res)).catch(erro(res));
            }
        }
    ).catch(erro(res));
}

module.exports.getUsuarioByPost  = function(req,res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    let token = req.query.token;
    let perm = jwt.decode(token);

    promise.then(
        function(post){
            let promiseUser = Usuario.findById(post.uid).exec();
            promiseUser.then(sucesso(res)).catch(erro(res));
        }
    ).catch(erro(res));
}