import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

export default function ConfirmPassword(){

    const { password, confirmPassword } = useSelector(state => state.userSlice)

    const dispatch = useDispatch()
    
    const [confirmPasswordDetails, setconfirmPasswordDetails] = useState({ 
        input: confirmPassword, 
        msgError: ''
    })

    function handleChange(event){

        const { name, value } = event.target
            
        if(password !== value){
            
            setconfirmPasswordDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'Confirmation password is not the same that the password inputed before.'
            }))

            dispatch(setUser({ name, value: '' }))

        } else {

            setconfirmPasswordDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: ''
            }))

            dispatch(setUser({ name, value }))
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
                    value={confirmPasswordDetails.input}
                    onChange={handleChange}
                    className='form_field_input'
                />
                { 
                    confirmPasswordDetails.msgError || password !== confirmPassword ? 
                    <CheckIcon check={false} /> : 
                    confirmPasswordDetails.input.length > 0 && <CheckIcon check={true} />
                }
            </div>
            {   
                confirmPasswordDetails.msgError && <ShowError msgError={confirmPasswordDetails.msgError} />
            }
        </div>
    )
}