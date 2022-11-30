import React, { useState } from "react";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

const REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function Email({ register, handleErrors }){

    const [showIcon, setShowIcon] = useState(null)

    function handleShowIcon(e){

        const testRegx = REGEXP.test(e.target.value)

        if(testRegx){
            setShowIcon(true)
        } else{
            setShowIcon(false)
        }
    }

    return(
        <div className="w-full mb-3 sm:mb-5">
            <label htmlFor="email" className="ml-3 leading-5 sm:ml-4 text-base font-semibold">Email *</label>
            <div className="relative">
                <input 
                    type='email'
                    id="email"
                    name="email"
                    className={`w-full indent-4 sm:w-80 h-10 bg-input text-base
                    sm:indent-4 mt-1 cursor-pointer outline-0 text-input-text rounded-3xl focus:border-2
                    focus:border-r-input-border focus:border-solid hover:border-solid hover:border-r-input-border 
                    hover:border-2 transition-all duration-100`}
                    {...register('email', {
                        required: 'Input your email.',
                        pattern: {
                            value: REGEXP,
                            message: 'Email is not valid'
                        },
                        onChange: (e) => handleShowIcon(e)
                    })}
                    autoComplete="email"
                />
                { 
                    showIcon === null 
                    ? ''
                    : <CheckIcon check={showIcon} />
                }
            </div>
            {   
                handleErrors.email && <ShowError msgError={handleErrors.email.message} />
            }
        </div>
    )
}