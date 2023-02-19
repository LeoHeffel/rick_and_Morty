let favs = []

getFav = (req, res) => {
            res.status(200).send(favs)
}

postFav = (req, res) => {
    const { name, species, gender, image, id }=req.body
    if ( !name|| !species|| !gender|| !image||!id ) res.status(400)
    else {
        let fav = favs.find(fav => fav.id === id)
        if (fav?.id == id) {
            res.status(400).send({error:'Favorito existente'})
        }else{
            favs.push({ name, species, gender, image, id })
        res.status(201).send(favs)
        }
    }
}

deleteFav = (req, res) => {
    const { id } = req.params
    if (!id) res.status(400)
    else {
        let favIndex = favs.findIndex(fav =>  fav.id == id  )        
        if (favIndex == -1) {
            res.status(404).send({ error: 'id no encontrado' })
        }else{
             favs.splice(favIndex, 1)
        res.status(200).send(favs)
        }
    }
}

module.exports = {getFav,postFav,deleteFav}