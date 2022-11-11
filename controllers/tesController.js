module.exports = class {
    static async getTestData(req, res) {
        res.status(200).send({
            status: 200,
            message: "Ambil data dari controller"
        })
    }

    static async getPathParameter(req, res) {
        res.send(`Id yang digunakan adalah ${req.params.id}`)
    }

    static async getQueryParameter(req, res) {
        console.log(req.query.author)
        res.send(`Mendapatkan buku berjudul ${req.query.title} yang ditulis oleh ${req.query.author}`)
    }

    static async getRequestBody(req, res) {
        res.send(req.body)
    }
}