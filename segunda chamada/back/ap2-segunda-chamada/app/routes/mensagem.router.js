let Mensagem_controller = require('../controllers/mensagem.controler');

module.exports = function(app){
    app.get('/api/mensagens?sender=??', Mensagem_controller.getMensagens);
    app.post('/api/mensagens', Mensagem_controller.inserirMensagem);
    app.delete('/api/mensagens/:id', Mensagem_controller.deleteMensagem);
}