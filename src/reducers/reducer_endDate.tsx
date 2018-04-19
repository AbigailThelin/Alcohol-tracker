export default function(state = null, action: any){
    console.log('action.payload end',action.payload)
    switch(action.type) {
        case 'END_DATE':
            return action.payload
    }

    return state
}