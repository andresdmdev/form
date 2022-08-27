import React from 'react';
/* import './styles/form.css'
 */import ConfirmPassword from './password/ConfirmPassword';
import Email from './email/Email';
import Password from './password/Password';
import FirstName from './name/FirstName';
import LastName from './name/LastName';
import Gender from './gender/Gender';
import Occupation from './occupation/Ocuppation';
import Address from './address/Address';
import { useDispatch, useSelector } from 'react-redux';
import { setCard } from '../store/slices/cardSlice';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useCallback } from 'react';

/* export default function Form(){

    const {
        firstName,
        lastName,
        email,
        password,
        confirmPassword
    } = useSelector(state => state.userSlice)

    const dispatchCard = useDispatch()

    const validation = (
        password !== confirmPassword ||
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === ''
    )
    
    function handleSubmit(event){
        event.preventDefault()

        dispatchCard(setCard({ name: 'smallCard', value: true }))
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <h1 className='form_title'>Sign up</h1>
            <FirstName />
            <LastName />
            <Email />
            <Password />
            <ConfirmPassword />
            <Gender />
            <Occupation />
            <Address />
            <button className='form_btn' disabled={validation}>Sign up</button>
        </form>
    )
} */


export default function Form(){

    const { setUserData, setShowCard } = useContext(UserContext)

    const { register, formState: { errors }, handleSubmit, control } = useForm()

    const handleOnSubmit = useCallback((data) => {
        setUserData(data)
        setShowCard({ 'smallCard': true, 'bigCard': false })
    }, [setShowCard, setUserData])

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)} className="w-full min-h-screen mx-7 my-8 sm:m-8">
            <h1 className="text-center font-bold text-3xl mt-0 mr-0 mb-10 ml-0">Sign up</h1> 
            <FirstName register={register} handleErrors={errors} />
            <LastName register={register} handleErrors={errors} />
            <Email register={register} handleErrors={errors} />
            <Password register={register} handleErrors={errors} />
            <ConfirmPassword register={register} handleErrors={errors} control={control} />
            <input type='submit' className={`w-40 h-10 border-none rounded-3xl bg-black font-bold 
            text-lg text-white block my-0 mx-auto mt-5 cursor-pointer outline-0 disabled:opacity-60 
            disabled:cursor-not-allowed hover:bg-white hover:text-black hover:border-black 
            hover:border-2 hover:border-solid transition-all duration-150`} placeholder='Sign up' />
        </form>
    )
}
