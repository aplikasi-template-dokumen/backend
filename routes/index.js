var express = require('express');
var router = express.Router();

const func = require('../controllers/tesController')
const uc = require('../controllers/userController')
const isAdmin = require('../middleware/isAdmin')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/tes', function(req, res) {
//   res.status(201)
//   res.send({
//     message: "Berhasil!",
//     data: req.headers
//   })
// })

router.get('/tes', func.getTestData)
router.get('/tes/:id', func.getPathParameter)
router.get('/books', func.getQueryParameter)
router.post('/form', isAdmin, func.getRequestBody)

router.get('/users', uc.getUsers)
router.post('/users/create', uc.createUser)
router.post('/users/login', uc.login)

module.exports = router;
