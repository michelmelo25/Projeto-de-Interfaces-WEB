let mongoose = require('mongoose');

module.exports = function(){
    let schema = mongoose.Schema({
        remetente_id: {
            type: mongoose.Schema.Types.ObjectId,
            require: true
        },
        destinatario_id: {
            type: mongoose.Schema.Types.ObjectId,
            require: true
        },
        texto: {
            type: String,
            require: true
        }
    });

    return mongoose.model('Mensagem', schema);
}();