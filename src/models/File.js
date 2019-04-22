const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    path: {
        type: String,   // Caminho para que o backend encontre o arquivo
        required: true  // Obrigatória
    }
}, {
        timestamps: true,    // Cria campo 'created at' e 'updated at' em cada registro da tabela(shema)
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    });

File.virtual('url').get(function () {
    const url = process.env.URL || 'http://localhost:3333';
    return `${url}/files/${encodeURIComponent(this.path)}`;
})

module.exports = mongoose.model('File', File);