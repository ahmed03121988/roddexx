import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/todoSlice";



const AddTask=()=>{
    const [input, setInput] = useState("");
    console.log(input);
    const dispatch=useDispatch()
    return(
        <div>
            <input type="text" onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={()=>dispatch(addTodo({id:Date.now(),name:input,isDone:false}))}>add</button>

        </div>
    )
}
export default AddTask