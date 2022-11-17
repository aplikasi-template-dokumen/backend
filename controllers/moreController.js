const { categories, sub_categories, occupations, languages, role, submission_status } = require('../models')

module.exports = class {
    /* CATEGORY */
    static async getCategories(req, res) {
        try {
            const result = await categories.findAll()

            if (result === null) {
                res.status(400).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: 'All Categories',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getCategoryById(req, res) {
        const result = await categories.findOne({ where: { id: req.params.id } })

        if (!result) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                res.status(200).json({
                    status: 200,
                    message: `Category with id ${req.params.id}`,
                    data: result
                })
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async createCategory(req, res) {
        try {
            const result = await categories.create({
                name: req.body.name,
                order: req.body.order
            })

            if (!result) {
                res.status(200).send({
                    message: 'Create failed!'
                })
            }

            else {
                res.status(201).json({
                    status: 201,
                    message: 'New category has been added.',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async editCategory(req, res) {
        const check = await categories.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist! Edit failed.'
            })
        }

        else {
            try {
                const result = await categories.update({
                    name: req.body.name,
                    order: req.body.order
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
                        message: `Category data with id ${req.params.id} has been updated!`,
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteCategory(req, res) {
        const check = await categories.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                const result = await categories.destroy({ where: { id: req.params.id } })

                if (!result) {
                    res.status(200).send({
                        message: 'Delete failed!'
                    })
                }

                else {
                    res.status(200).json({
                        status: 200,
                        message: `Category with id ${req.params.id} has been deleted`
                    })
                }
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }


    /* SUB CATEGORY */
    static async getSubCategories(req, res) {
        try {
            const result = await sub_categories.findAll()

            if (result === null) {
                res.status(400).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: 'All Sub Categories',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getSubCategoryById(req, res) {
        const result = await sub_categories.findOne({ where: { id: req.params.id } })

        if (!result) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                res.status(200).json({
                    status: 200,
                    message: `Sub category with id ${req.params.id}`,
                    data: result
                })
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async createSubCategory(req, res) {
        try {
            const result = await sub_categories.create({
                category_id: req.body.category_id,
                name: req.body.name,
                order: req.body.order
            })

            if (!result) {
                res.status(200).send({
                    message: 'Create failed!'
                })
            }

            else {
                res.status(201).json({
                    status: 201,
                    message: 'New sub category has been added.',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async editSubCategory(req, res) {
        const check = await sub_categories.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist! Edit failed.'
            })
        }

        else {
            try {
                const result = await sub_categories.update({
                    sub_category: req.body.sub_category,
                    name: req.body.name,
                    order: req.body.order
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
                        message: `Sub category data with id ${req.params.id} has been updated!`,
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteSubCategory(req, res) {
        const check = await sub_categories.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                const result = await sub_categories.destroy({ where: { id: req.params.id } })

                if (!result) {
                    res.status(200).send({
                        message: 'Delete failed!'
                    })
                }

                else {
                    res.status(200).json({
                        status: 200,
                        message: `Sub category with id ${req.params.id} has been deleted`
                    })
                }
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }


    /* ROLES */
    static async getRoles(req, res) {
        try {
            const result = await role.findAll()

            if (result === null) {
                res.status(400).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: 'All Roles',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getRoleById(req, res) {
        const result = await role.findOne({ where: { id: req.params.id } })

        if (!result) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                res.status(200).json({
                    status: 200,
                    message: `Role with id ${req.params.id}`,
                    data: result
                })
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async createRole(req, res) {
        try {
            const result = await role.create({
                name: req.body.name,
                order: req.body.order
            })

            if (!result) {
                res.status(200).send({
                    message: 'Create failed!'
                })
            }

            else {
                res.status(201).json({
                    status: 201,
                    message: 'New role has been added.',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async editRole(req, res) {
        const check = await role.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist! Edit failed.'
            })
        }

        else {
            try {
                const result = await role.update({
                    name: req.body.name,
                    order: req.body.order
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
                        message: `Role data with id ${req.params.id} has been updated!`,
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteRole(req, res) {
        const check = await role.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                const result = await role.destroy({ where: { id: req.params.id } })

                if (!result) {
                    res.status(200).send({
                        message: 'Delete failed!'
                    })
                }

                else {
                    res.status(200).json({
                        status: 200,
                        message: `Role with id ${req.params.id} has been deleted`
                    })
                }
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    /* OCCUPATIONS */
    static async getOccupations(req, res) {
        try {
            const result = await occupations.findAll()

            if (result === null) {
                res.status(400).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: 'All Occupations',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getOccupationById(req, res) {
        const result = await occupations.findOne({ where: { id: req.params.id } })

        if (!result) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                res.status(200).json({
                    status: 200,
                    message: `Occupation with id ${req.params.id}`,
                    data: result
                })
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async createOccupation(req, res) {
        try {
            const result = await occupations.create({
                name: req.body.name,
                order: req.body.order
            })

            if (!result) {
                res.status(200).send({
                    message: 'Create failed!'
                })
            }

            else {
                res.status(201).json({
                    status: 201,
                    message: 'New occupation has been added.',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async editOccupation(req, res) {
        const check = await occupations.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist! Edit failed.'
            })
        }

        else {
            try {
                const result = await occupations.update({
                    name: req.body.name,
                    order: req.body.order
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
                        message: `Occupation data with id ${req.params.id} has been updated!`,
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteOccupation(req, res) {
        const check = await occupations.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                const result = await occupations.destroy({ where: { id: req.params.id } })

                if (!result) {
                    res.status(200).send({
                        message: 'Delete failed!'
                    })
                }

                else {
                    res.status(200).json({
                        status: 200,
                        message: `Occupation with id ${req.params.id} has been deleted`
                    })
                }
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }


    /* LANGUAGES */
    static async getLanguages(req, res) {
        try {
            const result = await languages.findAll()

            if (result === null) {
                res.status(400).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: 'All Languages',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getLanguageById(req, res) {
        const result = await languages.findOne({ where: { id: req.params.id } })

        if (!result) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                res.status(200).json({
                    status: 200,
                    message: `Language with id ${req.params.id}`,
                    data: result
                })
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async createLanguage(req, res) {
        try {
            const result = await languages.create({
                name: req.body.name,
                order: req.body.order
            })

            if (!result) {
                res.status(200).send({
                    message: 'Create failed!'
                })
            }

            else {
                res.status(201).json({
                    status: 201,
                    message: 'New language has been added.',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async editLanguage(req, res) {
        const check = await languages.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist! Edit failed.'
            })
        }

        else {
            try {
                const result = await languages.update({
                    name: req.body.name,
                    order: req.body.order
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
                        message: `Language data with id ${req.params.id} has been updated!`,
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteLanguage(req, res) {
        const check = await languages.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                const result = await languages.destroy({ where: { id: req.params.id } })

                if (!result) {
                    res.status(200).send({
                        message: 'Delete failed!'
                    })
                }

                else {
                    res.status(200).json({
                        status: 200,
                        message: `Language with id ${req.params.id} has been deleted`
                    })
                }
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }


    /* SUBMISSION STATUSES */
    static async getSubStatuses(req, res) {
        try {
            const result = await submission_status.findAll()

            if (result === null) {
                res.status(400).send({
                    status: 400,
                    message: 'Data not exist!'
                })
            }

            else {
                res.status(200).json({
                    status: 200,
                    message: 'All Sub Statuses',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getSubStatusById(req, res) {
        const result = await submission_status.findOne({ where: { id: req.params.id } })

        if (!result) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                res.status(200).json({
                    status: 200,
                    message: `Submission status with id ${req.params.id}`,
                    data: result
                })
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async createSubStatus(req, res) {
        try {
            const result = await submission_status.create({
                name: req.body.name,
                order: req.body.order
            })

            if (!result) {
                res.status(200).send({
                    message: 'Create failed!'
                })
            }

            else {
                res.status(201).json({
                    status: 201,
                    message: 'New submission status has been added.',
                    data: result
                })
            }
        }

        catch(err) {
            console.log(err)
            res.send(err)
        }
    }

    static async editSubStatus(req, res) {
        const check = await submission_status.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist! Edit failed.'
            })
        }

        else {
            try {
                const result = await submission_status.update({
                    name: req.body.name,
                    order: req.body.order
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
                        message: `Submission status data with id ${req.params.id} has been updated!`,
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteSubStatus(req, res) {
        const check = await submission_status.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }

        else {
            try {
                const result = await submission_status.destroy({ where: { id: req.params.id } })

                if (!result) {
                    res.status(200).send({
                        message: 'Delete failed!'
                    })
                }

                else {
                    res.status(200).json({
                        status: 200,
                        message: `Submisison status with id ${req.params.id} has been deleted`
                    })
                }
            }
    
            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }
}