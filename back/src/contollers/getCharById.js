const { Character } = require('../DB_connection');


module.exports = getCharById = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(400)
    else {
        try{
            const data= await Character.findByPk(id)
            if (data?.id == id) {
                    res.status(200).send(data)
                }
                else res.status(404).send({ error: 'id no encontrado' })
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }
}
