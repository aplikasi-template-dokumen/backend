// const jwt = require('jsonwebtoken')

module.exports = async (req, res, next) => {
    const r = req.query.r

    if (r != 'ad') {
        return res.status(401).send('Akses Ditolak')
    }

    try {
        console.log('Admin')
        next()
    }

    catch(err) {
        res.status(400).send('Token tidak valid!')
    }
}