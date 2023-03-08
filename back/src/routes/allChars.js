const express = require('express')
const allController= require('../contollers/getAllChars.js')
const routerAllChars = express.Router()





module.exports =routerAllChars.get('/',allController)