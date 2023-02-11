
const http = require('http')
const getCharById = require('../contollers/getCharById')
const getCharDetail = require('../contollers/getCharDetail')
const PORT = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')

    if (req.url.includes('onsearch')) {
        let id = req.url.split("/").at(-1)
        getCharById(res, id)
        return
    }
    if (req.url.includes('detail')) {
        let id = req.url.split("/").at(-1)
        getCharDetail(res, id)
        return
    }
    res.writeHead(404, { 'Content-Type': 'text/plain' }).end("Route not found")

}).listen(PORT, 'localhost')
