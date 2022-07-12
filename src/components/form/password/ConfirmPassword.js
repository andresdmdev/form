import React, { useState } from "react";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

export default function ConfirmPassword(props){
    
    const [details, setDetails] = useState({ confirmPassword: '', msgError: '', color: '' })

    function handleChange(event){

        const { value } = event.target
            
        if(props.password !== value){
            
            setDetails(prevState => ({
                ...prevState,
                confirmPassword: value,
                msgError: 'Confirmation password is not the same that the password inputed before.',
                color: 'border-red'
            }))

        } else {

            setDetails(prevState => ({
                ...prevState,
                confirmPassword: value,
                msgError: '',
                color: 'border-green'
            }))

            props.handleConfirmPassword(event)
        }
    }

    return (
        <div className="form_field">
            <label htmlFor="confirmPassword" className="form_field_label">Confirm password *</label>
            <div>
                <input 
                    type='password'
                    id='confirmPassword'
                    name="confirmPassword"
                    value={details.confirmPassword}
                    onChange={handleChange}
                    className='form_field_input'
                />
                { 
                    details.msgError ? 
                    <CheckIcon check={false} /> : 
                    details.confirmPassword.length > 0 && <CheckIcon check={true} /> 
                }
            </div>
            {   
                details.msgError && <ShowError msgError={details.msgError} />
            }
        </div>
    )
}