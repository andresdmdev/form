import React from 'react';
import ConfirmPassword from './password/ConfirmPassword';
import Email from './email/Email';
import Password from './password/Password';
import FirstName from './name/FirstName';
import LastName from './name/LastName';
import Gender from './gender/Gender';
import Occupation from './occupation/Ocuppation';
import Address from './address/Address';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useCallback } from 'react';

export default function Form({ showCard }){

    const { setUserData } = useContext(UserContext)

    const { register, formState: { errors }, handleSubmit, control } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
            occupation: "",
            address: ""
        }
    })

    const handleOnSubmit = useCallback((data) => {
        setUserData(data)
        showCard(prevState => !prevState)
    }, [setUserData, showCard])

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className="w-full h-auto mx-7 my-8 sm:m-8">
            <h1 className="text-center font-bold text-3xl mt-0 mr-0 mb-10 ml-0">Sign up</h1> 
            <FirstName register={register} handleErrors={errors} />
            <LastName register={register} handleErrors={errors} />
            <Email register={register} handleErrors={errors} />
            <Password register={register} handleErrors={errors} />
            <ConfirmPassword register={register} handleErrors={errors} control={control} />
            <Gender register={register} />
            <Occupation register={register} />
            <Address register={register} />
            <button 
                type='submit' 
                name='submit'
                className={`w-40 h-10 border-none rounded-3xl bg-black font-bold 
                    text-lg text-white block my-0 mx-auto mt-5 cursor-pointer outline-0 disabled:opacity-60 
                    disabled:cursor-not-allowed hover:bg-white hover:text-black hover:border-black 
                    hover:border-2 hover:border-solid transition-all duration-150`} 
                placeholder='Submit'>Submit</button>
        </form>
    )
}
