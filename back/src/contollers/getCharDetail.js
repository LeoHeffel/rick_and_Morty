
module.exports = getCharDetail = (res, id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => {
            res.writeHead(200, { 'Content-Type': 'application/json' }).end(JSON.stringify({ image: data.image, name: data.name, gender: data.gender, status: data.status, origin: data.origin, species: data.species }))
            return
        })
        .catch((err) => res.writeHead(500, { 'Content-Type': 'text/plain' }).end(err.message))
}

