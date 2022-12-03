import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function SmallCard({ showCard }){

  const { userData } = useContext(UserContext)

  return (
    <div className="fixed top-32 left-1/10 sm:left-1/4 lg:left-1/3 z-50 bg-600 text-50 w-4/5 sm:w-2/4 lg:w-1/3 py-7 px-7 rounded-3xl" id="smallCard" data-testid='smallCard'>
      <h2 className="text-4xl font-semibold mb-6">Hello 🎉</h2>
      <h3 className="text-2xl font-semibold mb-2">{userData.firstName} {userData.lastName}</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-300 mb-3 w-full rounded-md px-2 py-2 flex flex-col justify-center">
          <h6 className="text-700 text-sm font-bold">Profession:</h6>
          <p className="text-700 text-base font-semibold">{userData.occupation ? userData.occupation : 'N/A'}</p>
        </div>
        <div className="bg-300 mb-3 w-full rounded-md px-2 py-2 flex flex-col justify-center">
          <h6 className="text-700 text-sm font-bold">Gender:</h6>
          <p className="text-700 text-base font-semibold">{userData.gender ? userData.gender : 'N/A'}</p>
        </div>
      </div>
      <div className="bg-300 mb-4 w-full rounded-md px-2 py-2 flex flex-col justify-center">
        <h6 className="text-700 text-sm font-bold">Address:</h6>
        <p className="text-700 text-base font-semibold">{userData.address ? userData.address : 'N/A'}</p>
      </div>
      <div className="text-base font-normal mb-6">
        We'll send an email to <b>{userData.email}</b> to confirm your subscription 😉
      </div>
      <div className="flex justify-center gap-3">
        <button  
          data-testid='confirmBtn'
          name="confirmBtn" 
          className='bg-smallBtn py-1.5 px-4 rounded-xl text-700 font-bold' 
          onClick={() => showCard(prevState => !prevState)}>Confirm</button>
      </div>
    </div>
  )
}