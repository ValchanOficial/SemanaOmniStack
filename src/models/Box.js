const mongoose = require('mongoose');

//schema é como a tabela no banco relacional
const Box = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // Armazena os IDs dos arquivos que pertencem a esta pasta
    files: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'File'
    }]
}, {
        timestamps: true // Cria campo 'created at' e 'updated at' em cada registro da tabela(shema)
    });

module.exports = mongoose.model('Box', Box);