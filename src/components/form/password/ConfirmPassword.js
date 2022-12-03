import React, { useState } from "react";
import { useWatch } from "react-hook-form";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

const REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/


export default function ConfirmPassword({ register, handleErrors, control }){

    const [showIcon, setShowIcon] = useState(null)

    const password = useWatch({
        control,
        name: 'password',
    })

    function handleShowIcon(e){

        const testRegx = REGEXP.test(e.target.value)

        if(testRegx && password === e.target.value){
            setShowIcon(e.target.value)
        } else{
            setShowIcon('')
        }
    }

    return(
        <div className="w-full mb-3 sm:mb-5">
            <label htmlFor="confirmPassword" className="ml-3 leading-5 sm:ml-4 text-base font-semibold">Confirm password *</label>
            <div className="relative">
                <input 
                    type='password'
                    id="confirmPassword"
                    name="confirmPassword"
                    data-testid='confirmPassword'
                    className={`w-full indent-4 sm:w-80 h-10 bg-input text-base
                    sm:indent-4 mt-1 cursor-pointer outline-0 text-input-text rounded-3xl focus:border-2
                    focus:border-r-input-border focus:border-solid hover:border-solid hover:border-r-input-border 
                    hover:border-2 transition-all duration-100`}
                    {...register('confirmPassword', {
                        required: 'Confirm your password.',
                        validate: {
                            value: value => (password === value || 'Passwords do not match'),
                        },
                        onChange: (e) => handleShowIcon(e)
                    })}
                    
                />
                { 
                    showIcon === null 
                    ? ''
                    : password === showIcon 
                    ? <CheckIcon check={true} />
                    : <CheckIcon check={false} />

                }
            </div>
            {   
                handleErrors.confirmPassword && <ShowError msgError={handleErrors.confirmPassword.message} />
            }
        </div>
    )
}