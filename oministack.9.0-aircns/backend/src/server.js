const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
mongoose.connect('mongodb+srv://air-cnc:aircnc1@aircnc-ztiqe.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const routes = require('./routes');
//porta que a aplicação sera iniciada no servidor
app.listen(3333);
app.use(cors());
// essa function é bem legal ajudando a criar uma rota valida para as thumbnails
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(express.json());
app.use(routes);