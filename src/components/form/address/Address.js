import React from "react";

export default function Address({ address, handleAddress }){
  return (
    <div className="form_field">
      <label htmlFor="address" className="form_field_label">Address</label>
      <textarea 
        name="address" 
        id="address"
        value={address}
        onChange={handleAddress}
        placeholder='Address here...'
        className="form_field_textarea"
      />
    </div>
  )
}