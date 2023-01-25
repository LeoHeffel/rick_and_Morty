export const addFavorite = (personaje) => {
    return {
        type: "ADD_FAVORITE",
        payload: personaje
    }
}

export const removeFavorite = (id) => {
    return {
        type: "REMOVE_FAVORITE",
        payload: id
    }
}