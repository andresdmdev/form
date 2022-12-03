import React, { useState } from 'react';
import Form from './form/Form';
import { UserContext } from '../context/UserContext';
import SmallCard from './cards/SmallCard';

function App() {

  const [cardElement, setCardELement] = useState(false)

  return (
    <UserContext>
      <div className="bg-400 w-full overflow-hidden scroll-mx-0 min-h-screen flex flex-col mx-auto sm:flex-row justify-between">
        <div className='flex bg-white text-black w-96 rounded-3xl my-4 mx-auto'>
          <Form showCard={setCardELement} />
        </div>
        {
          cardElement && <SmallCard showCard={setCardELement} />
        }
      </div>
    </UserContext>
  );
}

export default App;