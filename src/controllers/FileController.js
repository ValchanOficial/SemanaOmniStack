const Box = require('../models/Box')
const File = require('../models/File');  // Importa o model de File

class FileController {
    // Permitir que o user crie novas Boxes/pastas dentro da aplicação
    async store(req, res) {
        const box = await Box.findById(req.params.id);

        const file = await File.create({
            title: req.file.originalname,
            path: req.file.key,
        });

        box.files.push(file);

        await box.save();

        req.io.sockets.in(box._id).emit('file', file)

        // Criar um arquivo
        return res.json(file);
    }
}

// Usamos o new para retornar a instância da classe, e não a classe, para acessar os métodos da classe
module.exports = new FileController();