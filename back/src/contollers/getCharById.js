
module.exports = getCharById = (res, id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ id: data.id, image: data.image, name: data.name, gender: data.gender, species: data.species }))
            return
        })
        .catch((err) => res.writeHead(500, { 'Content-Type': 'text/plain' }).end(err.message))
}
