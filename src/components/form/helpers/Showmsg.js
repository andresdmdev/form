import React from "react";

function ShowError({ msgError }){

    return(
        <p className="form_field_errorMsg">{msgError}</p>
    );
}

export default ShowError;