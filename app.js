var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cloudinary = require('cloudinary').v2
const fileUpload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apisRouter = require('./routes/apis')

var app = express();

app.use(fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 }
}))

cloudinary.config({ 
    cloud_name: 'djzvshfzq', 
    api_key: '255558546559998', 
    api_secret: 'g5LJ6FTNzDHM5zk0Ic6R7xg0dDY' 
});

app.use(logger('dev'));
app.use(express.json({}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json({limit: '50mb', extended: true}))
app.use(express.urlencoded({limit:'50mb', extended: true, parameterLimit: 50000}))

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
