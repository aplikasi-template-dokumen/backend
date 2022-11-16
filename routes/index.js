var express = require('express');
var router = express.Router();

const cors = require('cors')
router.use(cors({
    // origin: 'http://127.0.0.1:3001'
    origin: '*'
}))

const func = require('../controllers/tesController')
const uc = require('../controllers/userController')
const dc = require('../controllers/docController')
const tc = require('../controllers/tempController')
const auth = require('../middleware/auth')

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

// router.get('/tes', func.getTestData)
// router.get('/tes/:id', func.getPathParameter)
// router.get('/books', func.getQueryParameter)
// router.post('/form', isAdmin, func.getRequestBody)

// MAIN API (AVAILABLE FOR GUEST)
router.post('/u/login', uc.login)
router.post('/u/regist', uc.createUser)

router.get('/t', tc.getTemplates)
router.get('/t/search', tc.getTempByKeyword) //query parameter ?key=
router.get('/t/:category', tc.getTempByCategory)
router.get('/t/filter', tc.filterTemp) //query parameter ?lang=&sub=
router.get('/t/:temp_id', tc.getTemplateById)
router.get('/t/download', tc.downloadTemp) //apakah untuk mengunduh perlu api??

// LOGIN USER
router.get('/d/user', auth, dc.getDocsByUser) //query parameter ?id=
router.post('/d/create', auth, dc.createDoc) //kalau pakai template, tambahin aja id-nya di query parameter
router.post('/d/:id/edit', auth, dc.editDoc) //save juga pakai ini
router.delete('/d/:id/delete', auth, dc.deleteDocByUser) //save delete kah?

// router.post('/d/create/:temp_id', auth, dc.createDocByTemp)
//buat tampilan halaman kalau dokumennya kosong (belum pernah buat)

// CONTRIBUTOR
router.get('/t/user', auth, tc.getTempByUser) //query parameter ?id=
router.post('/t/create', auth, tc.createTemplate) //query parameter ?uid=
router.post('/t/:id/edit', auth, tc.editTemp)
router.delete('/t/:id/delete', auth, tc.deleteTempByUser)

// REVIEWER
router.get('/s', auth, tc.getSubmissions)
router.get('/s/:id', auth, tc.getSubmissionById)
router.post('/s/:id/send-review', auth, tc.sendReview) //konsepnya seperti edit submission

// ADMIN
router.get('/u', auth, uc.getUsers)
router.get('/u/:id', auth, uc.getUserById)
router.put('/u/update/:id', auth, uc.editUser)
router.delete('/u/delete/:id', auth, uc.deleteUser)
router.post('/u/delete', auth, uc.deleteAllUser)
router.post('/u/disable/:id', auth, uc.softDeleteUser)

router.get('/d', auth, dc.getDocs)
router.delete('/d/:id/delete', auth, dc.deleteDoc)

router.get('t', auth, tc.getTemplates)
router.delete('/t/:id/delete', auth, tc.deleteTemp)

module.exports = router;
