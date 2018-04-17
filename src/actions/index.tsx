const START_DATE = "START_DATE";
const END_DATE = "END_DATE";

export function startDate(id:any){
    return{
        type: START_DATE,
        payload: id
    }
}

export function endDate(id:any){
    return{
        type: END_DATE,
        payload: id
    }
}