
const http = require('http')
//const characters = require('../utils/data')
const getCharById =require('../contollers/getCharById')
const getCharDetail= require('../contollers/getCharDetail')
const PORT = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    /* if (req.url.includes('rickandmorty/character')) {
        let id = req.url.split("/").at(-1)
        let data = characters.find(char => char.id == id)
        data? res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify(data))
       :res.writeHead(404,{ 'Content-Type':'text/plain' }).end("Character not found")
        return
    } */
    if (req.url.includes('onsearch')) {
        let id = req.url.split("/").at(-1)
        getCharById(res,id)
        return 
    }
    if (req.url.includes('detail')) {
        let id = req.url.split("/").at(-1)
        getCharDetail(res,id)
        return 
    }
    res.writeHead(404,{ 'Content-Type':'text/plain' }).end("Route not found")

}).listen(PORT, 'localhost')
