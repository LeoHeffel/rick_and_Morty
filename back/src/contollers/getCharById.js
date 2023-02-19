
module.exports = getCharById = async (req, res) => {
    const { id } = req.params
    if (!id) res.status(400)
    else {
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
            const data = await response.json()
            if (data?.id == id) {
                    res.status(200).send({ id: data.id, image: data.image, name: data.name, gender: data.gender, species: data.species })
                }
                else res.status(404).send({ error: 'id no encontrado' })
        }
        catch(error){
            res.status(500).send(error.message)
        }
    }
}
