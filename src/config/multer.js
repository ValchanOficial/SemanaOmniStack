// Esse arq vai definir algumas configurações do meu multer
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    // destino para onde que os arqs vão
    dest: path.resolve(__dirname, '..', '..', 'tmp'),
    // Armazena os arqs no disco
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'tmp'));
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`; //Exemplo: 2721yesra-test.jpg

                cb(null, file.key);
            })
        }
    })
};