import { useSelector } from "react-redux"


const ListTask=()=>{
    const Datta = useSelector(state=>state.Task.todos)
    console.log(Datta);
    return(
        <div>
            {Datta.map((item,index)=>{
                return(
                    <div>
                        <h1>{item.name}</h1>
                    </div>
                )
            }
            )}
            

        </div>
    )
}
export default ListTask