import React from 'react';
/* import './styles/App.css'; */
import Form from './form/Form';
import { useSelector } from 'react-redux';
import SmallCard from './cards/SmallCard';
import BigCard from './cards/BigCard';
import {UserContext} from '../context/UserContext';

function App() {

/*   const { smallCard, bigCard } = useSelector(state => state.cardSlice)
 */
  return (
    <UserContext>
      <div className="bg-400 min-h-screen flex flex-col sm:flex-row justify-between">
        <div className='flex bg-white text-black w-96 rounded-3xl my-4 mx-auto'>
          <Form />
        </div>
        {/* { smallCard && <SmallCard /> }
        { bigCard && <BigCard /> } */}
      </div>
    </UserContext>
  );
}

export default App;