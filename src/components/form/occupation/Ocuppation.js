import React from "react";

export default function Occupation({ occupation, handleOccupation }){

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
        <option value="student">Student</option>
        <option value="programmer">Programmer</option>
        <option value="entrepreneur">Entrepreneur</option>
        <option value="doctor">Doctor</option>
        <option value="lawyer">Lawyer</option>
        <option value="engineer">Engineer</option>
        <option value="athlete">Athlete</option>
        <option value="other">Other</option>
      </select>
    </div>
  )
}