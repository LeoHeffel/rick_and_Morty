const initialState = {
    myFavorites: [],
    allCharacters: []
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SET_CHARACTERS':
            
            return {
                ...state,
                allCharacters: state.allCharacters = payload
            }
        case 'ADD_FAVORITE':
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }

        case 'REMOVE_FAVORITE':
            return {
                ...state,
                myFavorites: state.myFavorites.filter(elem => elem.id !== payload),
                
            } 

        case 'FILTER':
            return {
                ...state,
                myFavorites: state.myFavorites.filter(char => char.gender === payload)
            }
        case 'ORDER':
            const orderCopy = [...state.myFavorites]
            const ordered = orderCopy.sort((a, b) => {
                if (a.id > b.id) {
                    return payload === 'Ascendente' ? 1 : -1
                }
                if (a.id < b.id) {
                    return payload === 'Ascendente' ? -1 : 1
                }
                else return 0
            })
            return {...state,
                myFavorites: ordered
            }

             case 'UPDATE_FAVORITES':
                return {
                    ...state,
                    myFavorites: payload
                } 
        default: return { ...state }
    }
}

export default rootReducer