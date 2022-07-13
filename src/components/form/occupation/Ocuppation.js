import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";

export default function Occupation(){

  const { occupation } = useSelector(state => state.userSlice)

  const dispatch = useDispatch()

  function handleOccupation(event){
    const { name, value } = event.target

    dispatch(setUser({ name, value }))
  }

  const occupations = [
    'Student', 
    'Programmer', 
    'Entrepreneur', 
    'Doctor', 
    'Lawyer', 
    'Engineer', 
    'Athlete', 
    'Other'
  ]

  const allOccupations = occupations.map(elem => (
    <option value={elem} key={elem}>{elem}</option>
  ))

  return (
    <div className="form_field">
      <label htmlFor="occupation" className="form_field_label">Occupation</label>
      <select 
        name="occupation" 
        id="occupation"
        onChange={handleOccupation}
        value={occupation}
        className="form_field_select"
      >
        <option value="">--Choose--</option>
        {allOccupations}
      </select>
      <i className="form_field_select_arrow"></i>
    </div>
  )
}