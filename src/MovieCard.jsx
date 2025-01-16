import React from "react";

function Movielist({display,display2}){

    return(
        <>
            <div className="con">
                <p className="list"> Li 1</p>
                <p className="list"> {display}</p>
                <p className="list"> {display2}</p>
            </div>
        </>
    )
}

function todo(){

    return "todo";
}
export default Movielist;