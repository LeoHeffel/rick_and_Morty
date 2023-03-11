
const { Favorite } = require('../DB_connection');


getFav = async(req, res) => {
    try {
        const favs= await Favorite.findAll({})
        
        res.status(200).send(favs)
    } catch (error) {
        res.status(400).send({error})
    }

}

postFav = async (req, res) => {
    try {
        
        const { id, name, status, species, gender, origin, image } = req.body
        if (!id || !name || !status || !species || !gender || !origin || !image) res.status(400).send({ error: 'Complete todos los campos' })
        else {
            let fav = await Favorite.findByPk(id)
            if (fav) {
                return res.status(400).send({ error: 'Favorito existente' })
            } else {
                const newFav =await Favorite.create({
                    id,
                    name,
                    status,
                    species,
                    gender,
                    origin,
                    image
                })
                res.status(201).send(newFav)
            }
        }
    } catch (error) {
        res.status(400).send({error})
    }

}

deleteFav = async (req, res) => {
    try {
        const { id } = req.params
        if (!id) res.status(400).send({ error: 'indique el id correctamente' })
        else {
            let fav = await Favorite.findByPk(id)
            if (!fav) {
                return res.status(404).send({ error: 'id no encontrado' })
            } else {
                fav.destroy()
                res.status(200).send({ message: 'fav eliminado' ,id})
            }
        }
    } catch (error) {
        res.status(400).send({error})
    }

}

module.exports = { getFav, postFav, deleteFav }