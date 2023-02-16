const express = require('express')
const getCharById= require('../contollers/getCharById.js')
const routerCharacter = express.Router()

module.exports =routerCharacter.get('/:id',getCharById)
