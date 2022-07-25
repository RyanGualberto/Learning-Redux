const estadoInicial = {
    min: 7,
    max: 31
}

export default function (state = estadoInicial, action){
    switch(action.type){
        case 'NUM_MIN_ALTERADO': 
            return {
                ...state,
                min: action.payload
            }
        case 'NUM_MAX_ALTERADO': 
            return {
                ...state,
                max: action.payload
            }
        default: 
            return state
    }
    
}