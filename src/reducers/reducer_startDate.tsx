export default function( state= null, action: any) {
    switch(action.type) {
        case 'START_DATE':
            return action.payload
    }

    return state
}