import React from 'react';
import './styles/App.css';
import Form from './form/Form';
import { useSelector } from 'react-redux';
import SmallCard from './cards/SmallCard';
import BigCard from './cards/BigCard';

function App() {

  const { smallCard, bigCard } = useSelector(state => state.cardSlice)

  return (
    <div className='App'>
      <div className='App_Form'>
        <Form />
      </div>
      { smallCard && <SmallCard /> }
      { bigCard && <BigCard /> }
    </div>
  );
}

export default App;
