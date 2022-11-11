const { users } = require('../models')
const bcrypt = require('bcrypt')

module.exports = class {
    static async getUsers(req, res) {
        try {
            const result = users.findAll();
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

    static async createUser(req, res) {
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
                message: "User Register Success!"
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

            res.status(200).send({
                status: 200,
                message: 'Login success!'
            })
        }

        catch (err) {
            console.log(err)
            res.send(err)
        }
    }
}