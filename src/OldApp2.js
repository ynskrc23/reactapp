import React from "react";
import Function from './Function';
import User from "./User";
import Home from "./Home";

function App(){
    return(
        <div>
            <Function text="naber karaca" />
            <User name={{data:'yunus karaca'}} address={{data:'elbistan/kahramanmaras'}} />
            <Home text="this is class component" />
        </div>
        
    )
}

export default App;