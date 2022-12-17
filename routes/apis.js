var express = require('express')
var router = express.Router()

const mc = require('../controllers/moreController')

// ADMIN
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

module.exports = router