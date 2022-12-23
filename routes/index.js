require('dotenv').config()
var express = require('express');
const cors = require('cors')
var router = express.Router();

router.use(cors({
    // origin: 'http://13.212.186.186:3001/'
    origin: '*'
}))

const uc = require('../controllers/userController')
const dc = require('../controllers/docController')
const tc = require('../controllers/tempController')
const mc = require('../controllers/moreController')
const a = require('../middleware/auth');

// router.post('/tes/upload-img', uc.beforeEdit)

// MAIN API (AVAILABLE FOR GUEST)
router.post('/u/login', uc.login)
router.post('/u/regist', uc.createUser)

router.get('/t-all', tc.getTempsAll)
router.get('/t/search', tc.getTempByKeyword)
router.get('/t/cat/:category', tc.getTempsByCategory)
router.get('/t/filter/:lang/:sub', tc.filterTemp)

// // LOGIN USER
router.get('/u/info', a.verify_nav)

router.get('/u/profile', a.verify_uid, uc.getUserProfileById)
router.post('/u/edit-profile', a.verify_uid, uc.editUserProfile)
router.post('/u/change-pass', a.verify_uid, uc.changePassword)

router.get('/d/user', a.verify_uid, dc.getDocsByUser)
router.get('/d/:id', dc.getDocById)
router.post('/d/create', a.verify_uid, dc.createDoc)
router.post('/d/:id/edit', a.verify_uid, dc.editDoc)
router.delete('/d/:id/delete', a.verify_uid, dc.deleteDoc) //save delete kah?

// // CONTRIBUTOR
router.get('/t/user', a.verify_cid, tc.getTempsByUser)
router.get('/t/:id', tc.getTempById)
router.post('/t/create', tc.createTemp)
router.post('/t/:id/edit', a.verify_cid, tc.editTemp)
router.delete('/t/:id/delete', a.verify_cid, tc.deleteTemp)

// // REVIEWER
router.get('/s', a.verify_rid, tc.getSubmissions)
router.get('/s/:id', a.verify_rid, tc.getSubmissionById)
router.post('/s/:id/send-review', a.verify_rid, tc.sendReview)

// ADMIN
router.get('/u', a.auth, uc.getUsers)
router.get('/u/:id', a.auth, uc.getUserById)
router.post('/u/update/:id', a.auth, uc.editUserByAdmin)
// router.delete('/u/delete/:id', a.auth, uc.deleteUser)
// router.post('/u/delete', a.auth, uc.deleteAllUser)
// router.post('/u/disable/:id', a.auth, uc.softDeleteUser)
router.post('/u/:id/change-user-pass', uc.changePasswordByAdmin)

router.get('/d', a.auth, dc.getDocs)
router.post('/d/:id/edit-admin', dc.editDocByAdmin)
router.delete('/d/:id/delete-admin', a.auth, dc.deleteDocByAdmin)

router.get('/t', a.auth, tc.getTemps)
router.post('/t/:id/edit-admin', tc.editTempByAdmin)
router.delete('/t/:id/delete-admin', a.auth, tc.deleteTempByAdmin)

router.get('/c', mc.getCategories)
router.get('/c/:id', mc.getCategoryById)
router.post('/c/create', mc.createCategory)
router.post('/c/:id/edit', mc.editCategory)
router.delete('/c/:id/delete', mc.deleteCategory)

router.get('/sc', mc.getSubCategories)
router.get('/sc/:id', mc.getSubCategoryById)
router.get('/sc/c/:id', mc.getSubCategoryByCategory)
router.post('/sc/create', mc.createSubCategory)
router.post('/sc/:id/edit', mc.editSubCategory)
router.delete('/sc/:id/delete', mc.deleteSubCategory)

router.get('/r', mc.getRoles)
router.get('/r/:id', mc.getRoleById)
router.post('/r/create', mc.createRole)
router.post('/r/:id/edit', mc.editRole)
router.delete('/r/:id/delete', mc.deleteRole)

router.get('/o', mc.getOccupations)
router.get('/o/:id', mc.getOccupationById)
router.post('/o/create', mc.createOccupation)
router.post('/o/:id/edit', mc.editOccupation)
router.delete('/o/:id/delete', mc.deleteOccupation)

router.get('/ss', mc.getSubStatuses)
router.get('/ss/:id', mc.getSubStatusById)
router.post('/ss/create', mc.createSubStatus)
router.post('/ss/:id/edit', mc.editSubStatus)
router.delete('/ss/:id/delete', mc.deleteSubStatus)

router.get('/l', mc.getLanguages)
router.get('/l/:id', mc.getLanguageById)
router.post('/l/create', mc.createLanguage)
router.post('/l/:id/edit', mc.editLanguage)
router.delete('/l/:id/delete', mc.deleteLanguage)

module.exports = router;
