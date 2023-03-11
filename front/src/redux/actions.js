//crear los types en archivo aparte
import axios from 'axios'

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

export const filterCards = (status) => {
    return {
        type: "FILTER",
        payload: status
    }
}

export const orderCards = (id) => {
    return {
        type: "ORDER",
        payload: id
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////


export const updateFavorites = (favorites) => {
    return {
        type: "UPDATE_FAVORITES",
        payload: favorites
    }
}



export function getFavorites() {
    return async function (dispatch) {
        try {
            const {data} = await axios.get(`http://localhost:3001/rickandmorty/fav`)
            dispatch(updateFavorites(data))
        }
        catch (error) {
            console.log(error)
        }
    }
}

export function addFavorites(favorito) {
    return async function (dispatch) {
        try {
            const {data} = await axios.post(`http://localhost:3001/rickandmorty/fav`, favorito)
            dispatch(addFavorite(data))
        }
        catch (error) {
            console.log(error)
        }
    }
}


export function removeFavorites(id) {
    return async function (dispatch) {
        try {
            const {data} = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
            dispatch(removeFavorite(data.id))
        }
        catch (error) {
            console.log(error)
        }
    }
}