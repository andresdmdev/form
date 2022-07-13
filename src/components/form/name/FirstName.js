import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";

export default function FirstName(){

    const { firstName } = useSelector(state => state.userSlice)
    const dispatch = useDispatch()

    const [firstNameDetails, setFirstNameDetails] = useState({ 
        input: firstName, 
        msgError: '' 
    })

    function validUser(length, min = 3, max = 25){
        return length < min || length > max ? true : false;
    }

    function handleChange(event){

        const { name, value } = event.target

        const matches = value.match(/\s+/g);
            
        if(value === ''){

            setFirstNameDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'Input your first name.'   
            }))

        } else if(matches){

            setFirstNameDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: 'First name cannot have blank spaces.'
            }))

            dispatch(setUser({ name, value: '' }))

        } else if(validUser(value.length)){

            setFirstNameDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: `First name must be between 3 and 25 characters.`
            }))

            dispatch(setUser({ name, value: '' }))

        } else{

            setFirstNameDetails(prevState => ({
                ...prevState,
                input: value,
                msgError: ''
            }))
            
            dispatch(setUser({ name, value }))
        }
    }

    return (
        <div className="form_field">
            <label htmlFor="firstName" className="form_field_label">First name *</label>
            <div>
                <input 
                    type='text'
                    id='firstName'
                    name="firstName"
                    value={firstNameDetails.input}
                    onChange={handleChange}
                    className='form_field_input'
                />
                { 
                    firstNameDetails.msgError ? 
                    <CheckIcon check={false} /> : 
                    firstNameDetails.input.length > 0 && <CheckIcon check={true} /> 
                }
            </div>
            {   
                firstNameDetails.msgError && <ShowError msgError={firstNameDetails.msgError} />
            }
        </div>
    )
}