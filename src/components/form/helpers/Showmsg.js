import React from "react";

function ShowError({ msgError }){

    return(
        <p className={`w-11/12 text-xs my-1 mx-3 text-error 
        sm:w-72 sm:mx-auto`}>{msgError}</p>
    );
}

export default ShowError;