const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/mymoney', {useNewUrlParser: true})

mongoose.Error.Messages.general.required = "O Atributo '{PATH}' é obrigatório"