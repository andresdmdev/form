import React, { useState } from "react";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

export default function FirstName({ register, handleErrors }){

    const [showIcon, setShowIcon] = useState(null)

    function handleShowIcon(e){
        if(e.target.value.length > 2){
            setShowIcon(true)
        } else{
            setShowIcon(false)
        }
    }

    return(
        <div className="w-full mb-3 sm:mb-5">
            <label htmlFor="firstName" className="ml-3 leading-5 sm:ml-4 text-base font-semibold">First name *</label>
            <div className="relative">
                <input 
                    type='text'
                    className={`w-full indent-4 sm:w-80 h-10 bg-input text-base
                    sm:indent-4 mt-1 cursor-pointer outline-0 text-input-text rounded-3xl focus:border-2
                    focus:border-r-input-border focus:border-solid hover:border-solid hover:border-r-input-border 
                    hover:border-2 transition-all duration-100`}
                    {...register('firstName', {
                        required: 'Input your first name.',
                        minLength: {
                            value: 3,
                            message: 'First name must be between 3 and 25 characters.'
                        },
                        maxLength: {
                            value: 25,
                            message: 'First name must be between 3 and 25 characters.'
                        },
                        onChange: (e) => handleShowIcon(e)
                    })}    
                />
                { 
                    showIcon === null 
                    ? ''
                    : <CheckIcon check={showIcon} />
                }
            </div>
            {   
                handleErrors.firstName && <ShowError msgError={handleErrors.firstName.message} />
            }
        </div>
    )
}
