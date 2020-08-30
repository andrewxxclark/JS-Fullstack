const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');

//Inicializaciones
const app = express();

//Configuraciones
app.set('port', 3000);

//middlewares
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req, file, cb) {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
})

app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Rutas
app.use('/api/books', require('./routes/books'));

//Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Inicia el servidor
app.listen(app.get('port'), () => {
    console.log('servidor en el puerto', app.get('port'));
});