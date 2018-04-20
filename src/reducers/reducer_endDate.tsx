export default function(state = null, action: any){
    switch(action.type) {
        case 'END_DATE':
        console.log('maybe, dss', action.payload)
            return action.payload
    }

    return state
}