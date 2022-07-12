import React from "react";
import errorIcon from "../../../img/error.svg"
import doneIcon from "../../../img/done.svg"

export default function CheckIcon({ check }){

  const icon = check ? doneIcon : errorIcon

  return(
      <img 
        src={icon} 
        alt='Icon' 
        className="icon" 
      />
  );
}
