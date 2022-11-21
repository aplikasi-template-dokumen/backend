const { documents } = require('../models')

module.exports = class {
    static async getDocs(req, res) {
        try {
            const result = await documents.findAll()

            if (result.length == 0) {
                res.status(404).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: 'All Documents',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getDocsByUser(req, res) {
        try {
            const result = await documents.findAll({ where: { user_id: req.query.id } })

            if (result.length == 0) {
                res.status(404).send({
                    status: 404,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: `All Documents with user id ${req.query.id}`,
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getDocById(req, res) {
        try {
            const result = await documents.findOne({ where: { id: req.params.id } })

            if (!result) {
                res.status(404).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: `Document with id ${req.params.id}`,
                    data: result
                })
            }

        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async createDoc(req, res) {
        try {
            const response = await documents.create({
                title: req.body.title,
                user_id: req.body.user_id,
                data: req.body.data
            })

            res.status(201).json({
                status: 201,
                message: 'New document has been created',
                data: response
            })
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async editDoc(req, res) {
        const check = await documents.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist! Edit failed.'
            })
        }

        else
        if (check.user_id != req.query.u_id) {
            res.status(400).send({
                status: 400,
                message: 'Only the author can edit this document!'
            })
        }

        else {
            try {
                const result = await documents.update({
                    title: req.body.title,
                    data: req.body.data
                }, { where: { id: req.params.id } })

                if (!result) {
                    res.status(400).send({
                        status: 400,
                        message: 'Update failed!'
                    })
                }

                else {
                    res.status(201).send({
                        status: 201,
                        message: `Document with id ${req.params.id} has been updated!`
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async editDocByAdmin(req, res) {
        const check = await documents.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist! Edit failed.'
            })
        }

        else {
            try {
                const result = await documents.update({
                    title: req.body.title,
                    user_id: req.body.user_id,
                    data: req.body.data
                }, { where: { id: req.params.id } })

                if (!result) {
                    res.status(400).send({
                        status: 400,
                        message: 'Update failed!'
                    })
                }

                else {
                    res.status(201).send({
                        status: 201,
                        message: `Document with id ${req.params.id} has been updated!`
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteDoc(req, res) {
        const check = await documents.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                await documents.destroy({ where: { id: req.params.id } })
                // console.log(req.params.id)
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteDocByAdmin(req, res) {
        const check = await documents.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                await documents.destroy({ where: { id: req.params.id } })
                // console.log(req.params.id)
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }
}