export default function( state= null, action: any) {
    console.log('startDate payload', action.payload)
    switch(action.type) {
        case 'START_DATE' :
            return action.payload
    }

    return state
}