const app = require('./app.js')
const saveApiData =require('./contollers/saveApiData.js')
const { sequelize } = require('./DB_connection.js')

const PORT = 3001
sequelize.sync({ force: true }).then(() => {
    saveApiData()
    console.log('base sync')
    app.listen(PORT, () => {
        console.log('servidor escuchando en puerto ' + PORT)
    })

})
