import React, { useState } from "react";
import CheckIcon from "../helpers/CheckIcon";
import ShowError from "../helpers/Showmsg";


export default function FirstName(props){

    const [details, setDetails] = useState({ firstName: '', msgError: '', color: '' })

    function validUser(length, min = 3, max = 25){
        return length < min || length > max ? true : false;
    }

    function handleChange(event){

        const { value } = event.target

        const matches = value.match(/\s+/g);
            
        if(value === ''){

            setDetails(prevState => ({
                ...prevState,
                firstName: value,
                msgError: 'Input your first name.',    
                color: 'border-red'
            }))

        } else if(matches){

            setDetails(prevState => ({
                ...prevState,
                firstName: value,
                msgError: 'First name cannot have blank spaces.',    
                color: 'border-red'
            }))

        } else if(validUser(value.length)){

            setDetails(prevState => ({
                ...prevState,
                firstName: value,
                msgError: `First name must be between 3 and 25 characters.`,    
                color: 'border-red'
            }))

        } else{

            setDetails(prevState => ({
                ...prevState,
                firstName: value,
                msgError: '',    
                color: 'border-green'
            }))
            props.handleName(event);
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
                    value={details.firstName}
                    onChange={handleChange}
                    className='form_field_input'
                />
                { 
                    details.msgError ? 
                    <CheckIcon check={false} /> : 
                    details.firstName.length > 0 && <CheckIcon check={true} /> 
                }
            </div>
            {   
                details.msgError && <ShowError msgError={details.msgError} />
            }
        </div>
    )
}