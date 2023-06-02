const https = require('https');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const { handlerCustomErrors } = require('./middleware/err');
const authController = require('./controllers/authController'); 
const cors = require('cors');


const routes = require('./routes/routes')
const authRoute = require('./routes/authRoutes')
const fs = require('fs'); 

const { Sequelize } = require('sequelize');

//Modelos
const { User } = require('./models/user');
const { imageUser } = require('./models/imagenUser');

const bcrypt = require('bcrypt');
const { verifyToken } = require('./middleware/auth');

dotenv.config();

const app = express();

//Configuracion de vistas y archivos estáticos
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

//Configuracion de Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(handlerCustomErrors);
app.use(bodyParser.json());
app.use(cors());

//Rutas
app.use(authRoute);
app.use(verifyToken, routes);


//Ruta para mostrar la pagina principal
app.get('/', async (req, res) => {
    const userId = req.cookies.userId;
    if (req.session.user) {
        // Si el usuario tiene una sesión activa, se muestra el index.html
        res.sendFile(path.join(__dirname, '/public/index.html'));
    } else if (userId) {
        // Si el usuario tiene un userId en las cookies, se busca en la base de datos y se renderiza el index.ejs
        try {
            const user = await User.findByPk(userId);
            res.render('index', { user });
        } catch (error) {
            res.status(500).send('Error al buscar usuario en la base de datos');
        }
    } else {
        // Si no hay una sesión activa ni un userId en las cookies, se redirige al usuario a la página de registro
        res.redirect(path.join(__dirname, '/public/registro.html'))
    }
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/register.html'));
});


//Ruta para registrar un usuario
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        if (!password) {
            res.status(400).send('La contraseña es requerida');
            return;
        }
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const user = await User.create({
            username: username,
            email: email,
            password: hashedPassword
        });
        console.log("USUARIO", user);
        res.send('Usuario registrado exitosamente');
        //res.status(200).send({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            // Si hay errores de validación, se envía un mensaje con los errores
            const errors = error.errors.map((error) => error.message);
            res.status(400).send({ errors: errors });
        } else {
            // Si hay otro tipo de error, se envía un mensaje genérico de error
            res.status(500).send('Error al registrar usuario');
            console.log("ERROR DE REGISTRO", error);
        }
    }
});

app.get('/login', (req, res) => {
    const userId = req.cookies.userId;
    if (userId) {
        res.redirect('/public/index.html'); // Redirige al usuario a la página principal si ya ha iniciado sesión
    } else {
        res.render('login');
    }
});

// app.post('/user/profile/:id', async (req, res) => {
//     const { firstName, lastName, age, gender, profileImage } = req.body;
//     try {
//         const user = await User.findByPk(req.params.id);
//         if (!user) {
//             res.status(404).send('Usuario no encontrado');
//             return;
//         }
//         const image = await imageUser.create({
//             firstName: firstName,
//             lastName: lastName,
//             age: age,
//             gender: gender,
//             profileImage: profileImage,
//             userId: user.id
//             // Aquí puedes agregar más campos si es necesario
//         });
//         console.log("IMAGEN CREADA", image);
//         res.send('Imagen creada exitosamente');
//     } catch (error) {
//         if (error.name === 'SequelizeValidationError') {
//             // Si hay errores de validación, se envía un mensaje con los errores
//             const errors = error.errors.map((error) => error.message);
//             res.status(400).send({ errors: errors });
//         } else {
//             // Si hay otro tipo de error, se envía un mensaje genérico de error
//             res.status(500).send('Error al crear la imagen');
//             console.log("ERROR DE CREACIÓN DE IMAGEN", error);
//         }
//     }
// });





app.post('/login', authController.login);
app.post('/logout', authController.logout);
app.post('/register',authController.register);
// app.post('/user/profile/:id',authController.profile);


// Ruta protegida que requiere un token de autenticación
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Contenido protegido', user: req.user });
});

/*app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});*/

https.createServer({key:fs.readFileSync('Certificate/client-key.pem'),cert:fs.readFileSync('Certificate/client-cert.pem')},app).listen(3000,() =>{
    console.log('Servidor escuchando en el puerto 3000')
})


module.exports = { Sequelize };