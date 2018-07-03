let Usuario = require('../models/usuario.model')
let bcrypt = require('bcrypt')
let jwt = require('jsonwebtoken')
const senha_secreta = "ksncalmudhsiauje"


module.exports.signin = function(req,res){
    let promise = Usuario.findOne({'email': req.body.email}).exec();
    promise.then(
        function(usuario){
            if(bcrypt.compareSync(req.body.senha, usuario.senha)){
                let token = jwt.sign({id: usuario._id}, senha_secreta);             
                res.status(201).send(token);
            }else{
                res.status(401).send('Login inválido')
            }
        }
    ).catch(
        function(){
            res.status(401).send('Login inválido')            
        }
    )
}

module.exports.verifyToken = function(req, res, next){
    jwt.verify(req.query.token, senha_secreta, 
        function(err, decoded){
            if(err){
                res.status(401).json({
                    message: "Sem permicao"
                })
            }else{
                next()
            }
        }
    )
}