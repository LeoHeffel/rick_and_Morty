const { Character } = require('../DB_connection');


getApiData = async () => {

    let charArr = []
    let page = 1
    while (page < 6) {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            const data = await response.json()
            if (data?.results) {
                data.results.map(character => {
                    let { id, image, name, gender, species, status, origin } = character
                    charArr.push({ id, image, name, gender, species, status, origin: origin.name })
                })
                page++
            }
            else throw 'error al fetchear'
        }
        catch (error) {
            throw new Error(error)
        }
    }

    return charArr
}

module.exports = saveApiData = async () => {
    const personajes = await getApiData()
    personajes.map(async personaje => {
        await Character.findOrCreate({
            where: {
                id: personaje.id,
            },
            defaults: {
                id: personaje.id,
                image: personaje.image,
                name: personaje.name,
                gender: personaje.gender,
                species: personaje.species,
                status: personaje.status,
                origin: personaje.origin
            }

        });
    })
}