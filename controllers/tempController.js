const { templates, sequelize } = require('../models')
const { Op } = require('sequelize')

module.exports = class {
    static async getTemps(req, res) {
        try {
            const result = await templates.findAll()

            if (result.length == 0) {
                res.status(404).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: 'All Templates',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getTempsAll(req, res) {
        try {
            // const result = await templates.findAll()
            const result = await templates.findAll({ attributes: ['id', 'title', 'desc', 'img', 'data'] })

            if (result.length == 0) {
                res.status(404).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: 'All Templates',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getTempsByCategory(req, res) {
        try {
            console.log(req.query.lang)

            if (req.query.lang === undefined) {
                const result = await templates.findAll({ where: { cat_id: req.params.category } })
    
                if (result.length == 0) {
                    res.status(404).send({
                        status: 400,
                        message: 'Data not exist!'
                    })
                }
    
                else {
                    res.status(200).json({
                        status: 200,
                        message: `All templates with category id ${req.params.category}`,
                        data: result
                    })
                }
            }

            else {
                const result = await templates.findAll({ where: { cat_id: req.params.category, lang_id: req.query.lang } })
    
                if (result.length == 0) {
                    res.status(404).send({
                        status: 400,
                        message: 'Data not exist!'
                    })
                }
    
                else {
                    res.status(200).json({
                        status: 200,
                        message: `All templates with category id ${req.params.category}`,
                        data: result
                    })
                }
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async filterTemp(req, res) {
        try {
            console.log(req.params.lang)
            console.log(req.params.sub)

            if (req.params.lang == 0) {
                const result = await templates.findAll({ where: { sub_cat_id: req.params.sub } })

                if (result.length == 0) {
                    res.status(400).send({
                        status: 400,
                        message: 'Data not exist!'
                    })
                }
    
                else {
                    res.status(200).json({
                        status: 200,
                        message: `All templates with sub category id ${req.params.sub}`,
                        data: result
                    })
                }
            }

            else
            if (req.params.sub == 0) {
                const result = await templates.findAll({ where: { lang_id: req.params.lang } })

                if (result.length == 0) {
                    res.status(400).send({
                        status: 400,
                        message: 'Data not exist!'
                    })
                }
    
                else {
                    res.status(200).json({
                        status: 200,
                        message: `All templates with language id ${req.params.lang}`,
                        data: result
                    })
                }
            }

            else {
                const result = await templates.findAll({ where: { lang_id: req.params.lang, sub_cat_id: req.params.sub } })

                if (result.length == 0) {
                    res.status(400).send({
                        status: 400,
                        message: 'Data not exist!'
                    })
                }
    
                else {
                    res.status(200).json({
                        status: 200,
                        message: `All templates with language id ${req.params.lang} and sub category id ${req.params.sub}`,
                        data: result
                    })
                    
                    // const result = await templates.findAll({ where: { [Op.and]: [{ lang_id: req.query.lang }, { sub_cat_id: req.query.sub }] } })
                }
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getTempByKeyword(req, res) {
        try {
            let lookupValue = req.query.key.toLowerCase()
            console.log('key: ', lookupValue)
            const result = await templates.findAll({
                // where: { title: { [Op.like]: "%" + req.query.key + "%" } }
                where: {
                    title: sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), 'LIKE', '%' + lookupValue + '%')
                }
            })

            if (result.length == 0) {
                res.status(404).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: `All templates match with keyword ${req.query.key}`,
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getSubmissions(req, res) {
        try {
            const result = await templates.findAll({ where: { status_id: 2 } })

            if (result.length == 0) {
                res.send({
                    status: 404,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: 'All Submissions',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getTempsByUser(req, res) {
        try {
            const result = await templates.findAll({ where: { contributor_id: req.query.id } })

            if (result.length == 0) {
                res.send({
                    status: 404,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: `All Templates with user id ${req.query.id}`,
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getTempById(req, res) {
        try {
            const result = await templates.findOne({ where: { id: req.params.id } })

            if (!result) {
                res.status(404).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).send({
                    status: 200,
                    message: `Template with id ${req.params.id}`,
                    data: result
                })
            }

        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getSubmissionById(req, res) {
        try {
            const result = await templates.findOne({ where: { id: req.params.id, status_id: 2 } })

            if (!result) {
                res.status(404).send({
                    status: 400,
                    message: `Template with id ${req.params.id} is not exist or not submitted yet.`
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: `Submisison with id ${req.params.id}.`,
                    data: result
                })
            }

        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async createTemp(req, res) {
        try {
            const response = await templates.create({
                title: 'Untitled',
                desc: null,
                lang_id: 1,
                cat_id: 1,
                sub_cat_id: 1,
                img: null,
                notes: null,
                data: null,
                status_id: 1,
                contributor_id: req.body.contributor_id
            })

            res.status(201).json({
                status: 201,
                message: 'New template has been created',
                data: response
            })
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async editTemp(req, res) {
        const check = await templates.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist! Edit failed.'
            })
        }

        else
        if (check.contributor_id != req.query.u_id) {
            res.status(400).send({
                status: 400,
                message: 'Only the author can edit this template!'
            })
        }

        else {
            try {
                const result = await templates.update({
                    title: req.body.title,
                    desc: req.body.desc,
                    lang_id: req.body.lang_id,
                    cat_id: req.body.cat_id,
                    sub_cat_id: req.body.sub_cat_id,
                    img: req.body.img,
                    notes: req.body.notes,
                    data: req.body.data,
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
                        message: `Template with id ${req.params.id} has been updated!`
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async editTempByAdmin(req, res) {
        const check = await templates.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist! Edit failed.'
            })
        }

        else {
            try {
                const result = await templates.update({
                    title: req.body.title,
                    desc: req.body.desc,
                    lang_id: req.body.lang_id,
                    cat_id: req.body.cat_id,
                    sub_cat_id: req.body.sub_cat_id,
                    img: req.body.img,
                    notes: req.body.notes,
                    data: req.body.data,
                    status_id: req.body.status_id,
                    contributor_id: req.body.contributor_id,
                    reviewer_id: req.body.rev_id,
                    publish_date: req.body.publish_date
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

    static async deleteTemp(req, res) {
        const check = await templates.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                await templates.destroy({ where: { id: req.params.id } })
                res.status(200).send({
                    status: 200,
                    message: `Template with id ${req.params.id} has been deleted.`,
                })
                // console.log(req.params.id)
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteTempByAdmin(req, res) {
        const check = await templates.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                await templates.destroy({ where: { id: req.params.id } })
                res.status(200).send({
                    status: 200,
                    message: `Template with id ${req.params.id} has been deleted.`,
                })
                // console.log(req.params.id)
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }
}