import React, { useState } from "react";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/

export default function Password({ register, handleErrors }){

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
            <label htmlFor="password" className="ml-3 leading-5 sm:ml-4 text-base font-semibold">Password *</label>
            <div className="relative">
                <input 
                    type='password'
                    id="password"
                    data-testid='password'
                    className={`w-full indent-4 sm:w-80 h-10 bg-input text-base
                    sm:indent-4 mt-1 cursor-pointer outline-0 text-input-text rounded-3xl focus:border-2
                    focus:border-r-input-border focus:border-solid hover:border-solid hover:border-r-input-border 
                    hover:border-2 transition-all duration-100`}
                    {...register('password', {
                        required: 'Input your password.',
                        pattern: {
                            value: REGEXP,
                            message: 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)'
                        },
                        onChange: (e) => handleShowIcon(e)
                    })}
                    autoComplete="current-password"
                />
                { 
                    showIcon === null 
                    ? ''
                    : <CheckIcon check={showIcon} />
                }
            </div>
            {   
                handleErrors.password && <ShowError msgError={handleErrors.password.message} />
            }
        </div>
    )
}