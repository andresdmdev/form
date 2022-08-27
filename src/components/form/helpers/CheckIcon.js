import React from "react";
import errorIcon from "../../../img/error.svg"
import doneIcon from "../../../img/done.svg"

export default function CheckIcon({ check }){

  return(
      <img 
        src={check ? doneIcon : errorIcon} 
        alt='Icon' 
        className={`absolute w-52 h-4 box-border top-4 left-48`} 
      />
  );
}