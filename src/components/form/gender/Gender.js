import React from "react";

export default function Gender({ gender, handleGender }){
  
  return (
    <div className="form_field">
      <fieldset className="fieldset">
        <legend className="fieldset_title">Gender</legend>
        <input 
          type="radio" 
          checked={gender === 'male'} 
          value="male"
          name="gender"
          id="male"
          onChange={handleGender}
          className="form_field_radio" 
        />
        <label htmlFor="male" className="fieldset_label">Male</label>
        <input 
          type="radio" 
          checked={gender === 'female'} 
          value="female"
          name="gender"
          id="female"
          onChange={handleGender}
          className="form_field_radio" 
        />
        <label htmlFor="female" className="fieldset_label">Female</label>
        <input 
          type="radio" 
          checked={gender === 'other'} 
          value="other"
          name="gender"
          id="other"
          onChange={handleGender}
          className="form_field_radio" 
        />
        <label htmlFor="other" className="fieldset_label">Other</label>
      </fieldset>
    </div>
  )
}