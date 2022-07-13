import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";

export default function Gender(){

  const { gender } = useSelector(state => state.userSlice)

  const dispatch = useDispatch()
  
  function handleGender(event){

    const { name, value } = event.target

    dispatch(setUser({ name, value }))
  }

  const genders = ['Male', 'Female', 'Other']

  const allGender = genders.map(elem => (
    <div key={elem} className='form_field_fieldset_radio'>
        <input 
          type="radio" 
          checked={gender === elem} 
          value={elem}
          name="gender"
          id={elem}
          onChange={handleGender}
          className="form_field_fieldset_radio-check" 
        />
        <i></i>
        <label htmlFor={elem} className="form_field_fieldset_label">{elem}</label>
    </div>
  ))

  return (
    <div className="form_field">
      <fieldset className="form_field_fieldset">
        <legend className="form_field_fieldset_title">Gender</legend>
        {allGender}
      </fieldset>
    </div>
  )
}