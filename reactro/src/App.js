import { useState } from "react";
import ListTask from "./component/listTask";
import AddTask from "./component/AddTask";




function App() {
 

  
  return (
    <div className="App">
      <h1>TODO List</h1>
      <AddTask/>
      <ListTask/>
      
    </div>
  );
}

export default App;