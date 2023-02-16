
module.exports = getCharDetail = (req, res) => {
    const { id } = req.params
    if (!id) res.status(400)
    else {
        fetch(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.json())
            .then(data => {
                if (data?.id == id) {
                    res.status(200).send({ image: data.image, name: data.name, gender: data.gender, status: data.status, origin: data.origin, species: data.species })
                }else{

                    res.status(404).send({ error: 'id no encontrado' })
                }
            })
            .catch((err) => res.status(500).send(err.message))
    }
}

