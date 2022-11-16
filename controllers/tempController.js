const { templates } = require('../models')

module.exports = class {
    // static async getDocs(req, res) {
    //     try {
    //         const result = await documents.findAll()
    //         res.status(200).json({
    //             status: 200,
    //             message: 'Telah mencoba mengambil data.',
    //             data: result
    //         })
    //     }

    //     catch(err) {
    //         console.log(err)
    //         res.send(err)
    //     }
    // }

    // static async addDoc(req, res) {
    //     try {
    //         const response = await documents.create({
    //             title: req.body.title,
    //             // user_id: req.body.user_id,
    //             data: req.body.data
    //         })

    //         res.status(201).json({
    //             status: 201,
    //             message: 'New document has been created',
    //             data: response
    //         })
    //     }

    //     catch(err) {
    //         console.log(err)
    //         res.send(err)
    //     }
    // }

    // static async deleteDoc(req, res) {
    //     const check = await documents.findOne({ where: { id: req.params.id } })

    //     if (!check) {
    //         res.status(400).send({
    //             status: 400,
    //             message: 'Data not exist!'
    //         })
    //     }

    //     else {
    //         try {
    //             await documents.destroy({ where: { id: req.params.id } })
    //             // console.log(req.params.id)
    //         }

    //         catch(err) {
    //             console.log(err)
    //             res.send(err)
    //         }
    //     }
    // }
}