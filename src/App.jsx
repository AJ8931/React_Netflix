import React from "react";
import Cards from "./Cards";
import Sdata from "./SData";

const fav="netflix";

const App=()=>(
    <>
    <h1>Netflix</h1>
     {Sdata.map((val)=>{         
    return(  
        <Cards
        key = {val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        SName={val.SName}
        refrence={val.refrence}
        />);

     })}
        {console.log(Sdata)}
    </>
    );
    export default App;