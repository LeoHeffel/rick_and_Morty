const express = require("express");
const bodyParser= require('body-parser')
const cors= require('cors')


const routerCharacter = require('./routes/characterRouter.js')
const routerDetail = require('./routes/detailRouter.js')
const routerFav= require('./routes/favRouter.js')
const app = express();


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));



app.use('/rickandmorty/character/', routerCharacter)
app.use('/rickandmorty/detail/', routerDetail)
app.use('/rickandmorty/fav/', routerFav)
module.exports=app