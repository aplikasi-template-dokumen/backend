const { users, role, occupations } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

const cloudinary = require('cloudinary').v2

module.exports = class {
    static async getUsers(req, res) {
        try {
            const result = await users.findAll({ order: [['id', 'ASC']], include: [{ model: role, attributes: ['name'], as: 'role_name' }] });
            res.status(200).json({
                status: 200,
                data: result
            })
        }

        catch (err) {
            console.log(err);
            res.send(err);
        }
    }

    static async getUserProfileById(req, res) {
        try {
            const result = await users.findOne({ where: {id: req.uid},
                include: [
                    { model: role, attributes: ['name'], as: 'role_name' },
                    { model: occupations, attributes: ['name'], as: 'occ' },
                ] })
            
            if (!result) {
                res.status(404).json({
                    status: 404,
                    message: 'Data not found!'
                })
            }
            
            else {
                const data = {
                    "id": result.id,
                    "role": result.role_name.name,
                    "email": result.email,
                    "full_name": result.full_name,
                    "username": result.username,
                    "occupation_id": result.occupation_id,
                    "occupation": result.occ.name,
                    "affiliation": result.affiliation,
                    "profile_img": result.profile_img
                }

                res.status(200).json({
                    status: 200,
                    data
                })
            }
        }

        catch (err) {
            console.log(err)
            res.send(err)
        }
    }

    static async getUserById(req, res) {
        try {
            const result = await users.findOne({ where: {id: req.params.id} })
            
            if (!result) {
                res.status(404).json({
                    status: 404,
                    message: 'Data not found!'
                })
            }
            
            else {
                res.status(200).json({
                    status: 200,
                    data: result
                })
            }
        }

        catch (err) {
            console.log(err)
            res.send(err)
        }
    }

    static async createUser(req, res) {
        if (req.body.pass != req.body.repass) {
            res.send('Password harus sama!')
        }


        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(req.body.pass, salt)

        try {
            const response = await users.create({
                role: 1,
                email: req.body.email,
                full_name: req.body.name,
                username: req.body.uname,
                occupation_id: req.body.occ_id,
                password: hash,
                // profile_img: '/images/default-profile.png',
                profile_img: null,
                affiliation: req.body.aff,
                reviewer_id: null,
                enable: true
            })

            // res.status(201).json({
            //     status: 201,
            //     message: "User Register Success!",
            //     data: {"id": response.id, "username": response.username, "role": response.role}
            // })
            
            res.json({
                status: 201,
                message: "User Register Success!",
                data: {"id": response.id, "username": response.username, "role": response.role}
            })
        }

        catch (err) {
            console.log(err)
            res.send(err)
        }
    }

    // static async createUserByAdmin(req, res) {
    //     if (req.body.pass != req.body.repass) {
    //         res.send('Password harus sama!')
    //     }


    //     const salt = await bcrypt.genSalt()
    //     const hash = await bcrypt.hash(req.body.pass, salt)

    //     try {
    //         const response = await users.create({
    //             role: req.body.role,
    //             email: req.body.email,
    //             full_name: req.body.name,
    //             username: req.body.uname,
    //             occupation_id: req.body.occ_id,
    //             password: hash,
    //             // profile_img: '/images/default-profile.png',
    //             profile_img: null,
    //             affiliation: req.body.aff,
    //             reviewer_id: null,
    //             enable: true
    //         })

    //         res.status(201).json({
    //             status: 201,
    //             message: "User Register Success!",
    //             data: {"id": response.id, "username": response.username, "role": response.role}
    //         })
    //     }

    //     catch (err) {
    //         console.log(err)
    //         res.send(err)
    //     }
    // }

    static async login(req, res) {
        try {
            const user = await users.findOne({
                where: { username: req.body.uname }
            })

            if (!user) {
                res.send({
                    status: 400,
                    message: 'Login failed!'
                })
            }

            else {
                const isValidPass = await bcrypt.compare(
                    req.body.pass,
                    user.password
                )
    
                if (!isValidPass) {
                    res.send({
                        status: 400,
                        message: 'Login Failed! (check pass)'
                    })
                }
    
                else {
                    const token = jwt.sign(
                        {
                            _i: user.id,
                            _u: user.username,
                            _r: user.role,
                            _p: user.profile_img
                        }, process.env.SECRET_TOKEN_KEY)

                    res.header('token', token)

                    res.status(200).send({
                        status: 200,
                        message: 'Login success!',
                        token
                    })
                }
            }
        }

        catch (err) {
            console.log(err)
            res.send(err)
        }
    }

    // static async beforeEdit(req, res) {
    //     try {
    //         const file = req.files.image
    //         const result = await cloudinary.uploader.upload(file.tempFilePath, {
    //             public_id: `${Date.now()}`,
    //             resource_type: 'auto',
    //             folder: 'images'
    //         })
    
    //         res.status(200).json({
    //             message: 'Berhasil',
    //             result: result.secure_url
    //         })
    //     }
    
    //     catch(err) {
    //         console.log(err)
    //     }
    // }

    static async editUserProfile(req, res) {
        const check = await users.findOne({ where: { id: req.uid } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }
        
        else {
            try {
                if (req.body.image !== "undefined") {
                    const file = req.files.image

                    const img_result = await cloudinary.uploader.upload(file.tempFilePath, {
                        public_id: `${Date.now()}`,
                        resource_type: 'auto',
                        folder: 'profile_images'
                    })

                    if (check.profile_img !== null) {
                        const split = '.' + check.profile_img.split('.')[3]
                        const public_id = 'profile_images/' + (check.profile_img.split('profile_images/')[1]).split(split)[0]
                        cloudinary.uploader.destroy(public_id)
                    }

                    const result = await users.update({
                        username: req.body.uname,
                        full_name: req.body.name,
                        occupation_id: req.body.occ_id,
                        profile_img: img_result.secure_url,
                        affiliation: req.body.aff,
                    }, { where: { id: req.uid } })

                    res.status(201).send({
                        message: 'User data has been updated!',
                        result
                    })
                }

                else {
                    const result = await users.update({
                        username: req.body.uname,
                        full_name: req.body.name,
                        occupation_id: req.body.occ_id,
                        profile_img: check.profile_img,
                        affiliation: req.body.aff,
                    }, { where: { id: req.uid } })

                    res.status(201).send({
                        message: 'User data has been updated!',
                        result
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async editUserByAdmin(req, res) {
        const check = await users.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }
        
        else {
            try {
                if (req.body.image !== "undefined") {
                    const file = req.files.image

                    const img_result = await cloudinary.uploader.upload(file.tempFilePath, {
                        public_id: `${Date.now()}`,
                        resource_type: 'auto',
                        folder: 'profile_images'
                    })

                    if (check.profile_img !== null) {
                        const split = '.' + check.profile_img.split('.')[3]
                        const public_id = 'profile_images/' + (check.profile_img.split('profile_images/')[1]).split(split)[0]
                        cloudinary.uploader.destroy(public_id)
                    }

                    const result = await users.update({
                        role: req.body.role,
                        email: req.body.email,
                        full_name: req.body.name,
                        username: req.body.uname,
                        occupation_id: req.body.occ_id,
                        profile_img: img_result.secure_url,
                        affiliation: req.body.aff,
                        reviewer_id: req.body.rev_id,
                        enable: req.body.enable
                    }, { where: { id: req.params.id } })

                    res.status(201).send({
                        message: 'User data has been updated!',
                        result
                    })
                }

                else {
                    const result = await users.update({
                        role: req.body.role,
                        email: req.body.email,
                        full_name: req.body.name,
                        username: req.body.uname,
                        occupation_id: req.body.occ_id,
                        profile_img: check.profile_img,
                        affiliation: req.body.aff,
                        reviewer_id: req.body.rev_id,
                        enable: req.body.enable
                    }, { where: { id: req.params.id } })
    
                    res.status(201).send({
                        message: 'User data has been updated!'
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async changePassword(req, res) {
        const user = await users.findOne({ where: { id: req.uid } })

        if (!user) {
            res.send({
                status: 400,
                message: 'Data not exist!'
            })
        }
        
        else {
            try {
                const isValidOldPass = await bcrypt.compare(
                    req.body.oldPass,
                    user.password
                )

                if (!isValidOldPass || req.body.newPass !== req.body.newPassConf) {
                    res.send({
                        status: 400,
                        message: 'Failed! Old password is wrong or new passwords are not same.'
                    })
                }

                else {
                    const salt = await bcrypt.genSalt()
                    const hash = await bcrypt.hash(req.body.newPass, salt)

                    const result = await users.update({
                        password: hash
                    }, { where: { id: req.uid } })
    
                    res.status(201).send({
                        message: 'User password has been changed!'
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async changePasswordByAdmin(req, res) {
        const user = await users.findOne({ where: { id: req.params.id } })

        if (!user) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }
        
        else {
            try {
                if (req.body.newPass !== req.body.newPassConf) {
                    res.status(400).send({
                        status: 400,
                        message: 'Failed! New passwords are not same.'
                    })
                }

                else {
                    const salt = await bcrypt.genSalt()
                    const hash = await bcrypt.hash(req.body.newPass, salt)

                    const result = await users.update({
                        password: hash
                    }, { where: { id: req.params.id } })
    
                    res.status(201).send({
                        message: 'User password has been changed!'
                    })
                }
            }

            catch(err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteUser(req, res) {
        const check = await users.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }
        
        else {
            try {
                await users.destroy({ where: { id: req.params.id } })
                console.log(req.params.id)
                res.status(200).json({
                    message: `User data with id ${req.params.id} has been deleted`
                })
            }
            
            catch (err) {
                console.log(err)
                res.send(err)
            }
        }
    }

    static async deleteAllUser(req, res) {
        try {
            //
        }
        
        catch (err) {
            console.log(err)
            res.send(err)
        }
    }

    static async softDeleteUser(req, res) {
        try {
            //
        }
        
        catch (err) {
            console.log(err)
            res.send(err)
        }
    }
}