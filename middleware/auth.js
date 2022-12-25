const jwt = require('jsonwebtoken')

module.exports = class {
    static async auth (req, res, next) {
        const token = req.query.token

        if (token == undefined) {
            return res.status(401).send('Akses Ditolak')
        }
    
        try {
            const verify = jwt.verify(token, process.env.SECRET_TOKEN_KEY)
            next()
        }
    
        catch(err) {
            res.status(400).send('Token tidak valid!')
        }
    }

    static async verify_nav (req, res) {
        const token = req.query.token

        if (token == undefined) {
            return res.status(401).send('Akses Ditolak')
        }

        try {
            const verify = jwt.verify(token, process.env.SECRET_TOKEN_KEY)
            res.status(200).send({
                status: 200,
                info: verify
            })
        }

        catch(err) {
            res.status(400).send('Token tidak valid!')
        }
    }

    static async verify_uid (req, res, next) {
        const token = req.query.token

        if (token == undefined) {
            return res.status(401).send('Akses Ditolak')
        }

        try {
            const verify = jwt.verify(token, process.env.SECRET_TOKEN_KEY)
            req.uid = verify._i
            next()
        }

        catch(err) {
            res.status(400).send('Token tidak valid!')
        }
    }

    static async verify_cid (req, res, next) {
        const token = req.query.token

        if (token == undefined) {
            return res.status(401).send('Akses Ditolak')
        }

        try {
            const verify = jwt.verify(token, process.env.SECRET_TOKEN_KEY)
            
            if (verify._r != 1) {
                req.uid = verify._i
                next()
            }

            else {
                res.status(400).send('Token tidak valid!')
            }

        }

        catch(err) {
            res.status(400).send('Token tidak valid!')
        }
    }

    static async verify_rid (req, res, next) {
        const token = req.query.token

        if (token == undefined) {
            return res.status(401).send('Akses Ditolak')
        }

        try {
            const verify = jwt.verify(token, process.env.SECRET_TOKEN_KEY)
            
            if (verify._r == 3 || verify._r == 4) {
                req.uid = verify._i
                next()
            }

            else {
                res.status(400).send('Token tidak valid!')
            }

        }

        catch(err) {
            res.status(400).send('Token tidak valid!')
        }
    }

    static async verify_aid (req, res, next) {
        const token = req.query.token

        if (token == undefined) {
            return res.status(401).send('Akses Ditolak')
        }

        try {
            const verify = jwt.verify(token, process.env.SECRET_TOKEN_KEY)
            
            if (verify._r == 4) {
                req.uid = verify._i
                // req.ur = verify._r
                next()
            }

            else {
                res.status(400).send('Token tidak valid!')
            }

        }

        catch(err) {
            res.status(400).send('Token tidak valid!')
        }
    }
}