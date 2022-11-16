const { users } = require('../models')
const bcrypt = require('bcrypt')
// const jwt = require("")

module.exports = class {
    static async getUsers(req, res) {
        try {
            const result = await users.findAll();
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
                role: req.body.role,
                email: req.body.email,
                full_name: req.body.name,
                username: req.body.uname,
                occupation_id: req.body.occ_id,
                password: hash,
                profile_img: req.body.img,
                affiliation: req.body.aff,
                reviewer_id: null,
                enable: true
            })

            res.status(201).json({
                status: 201,
                message: "User Register Success!",
                username: req.body.uname
            })
        }

        catch (err) {
            console.log(err)
            res.send(err)
        }
    }

    static async login(req, res) {
        try {
            const user = await users.findOne({
                where: {
                    username: req.body.uname
                }
            })

            if (!user) {
                res.status(400).send({
                    status: 400,
                    message: 'Login failed!'
                })
            }

            const isValidPass = await bcrypt.compare(
                req.body.pass,
                user.password
            )

            if (!isValidPass) {
                res.status(404).send({
                    status: 400,
                    message: 'Login Failed! (check pass)'
                })
            }

            res.header('role', user.role)
            res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
            res.status(200).send({
                status: 200,
                message: 'Login success!',
                data: user
            })
        }

        catch (err) {
            console.log(err)
            res.send(err)
        }
    }

    static async editUser(req, res) {
        const check = await users.findOne({ where: { id: req.params.id } })

        if (!check) {
            res.status(400).send({
                status: 400,
                message: 'Data not exist!'
            })
        }
        
        else {
            try {
                const result = await users.update({
                    username: req.body.uname,
                    full_name: req.body.name,
                    occupation_id: req.body.occ_id,
                    profile_img: req.body.img,
                    affiliation: req.body.aff
                }, { where: { id: req.params.id } })

                res.status(201).send({
                    message: 'User data has been updated!'
                })
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