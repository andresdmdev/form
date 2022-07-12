import React from "react";

function ShowError({ msgError }){

    return(
        <p className="errorMsg">{msgError}</p>
    );
}

export default ShowError;