import { Add_Movie } from "../constants/actions.constants"



export const AddMovie =(payload)=>{
    return{
        type: Add_Movie,
        payload
    }

    
}