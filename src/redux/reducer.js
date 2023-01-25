const initialState = {
    myFavorites: [  ]
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'ADD_FAVORITE': {
            return {...state,
                myFavorites: [...state.myFavorites, payload]
            }
        }
        case 'REMOVE_FAVORITE':{
            return {...state,
                myFavorites: state.myFavorites.filter(elem => elem.id !== payload)
            }
        }
        

        default: return { ...state }
    }
}

export default rootReducer