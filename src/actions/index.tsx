export function startDate(id:any){
    return{
        type: 'START_DATE',
        payload: id
    }
}

export function endDate(id:any){
    return{
        type: 'END_DATE',
        payload: id
    }
}

export function alcoholTitle(id:any){
    return{
        type: 'ALCOHOL_TITLE',
        payload: id
    }
}