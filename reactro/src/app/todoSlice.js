import { createSlice } from "@reduxjs/toolkit"



const initialState={
    todos:[
        {
            id:1,
            name:'todo1',
            isDone:true
            
        },
        {
            id:2,
            name:'todo2',
            isDone:false
            
        }

    ]
}
const todoSlice = createSlice({
    name:'taskList',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            // const newTodo={
            //     id:Date.now(),
            //     name:action.payload,
            //     isDone:false
            // }
            state.todos.push(action.payload)

        }

    }

})
export const{addTodo}=todoSlice.actions;
export default todoSlice.reducer;
