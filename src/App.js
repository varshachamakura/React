import React from 'react';

import Form from './components/f1'
import Reducer from './components/Reducer'

import Stopwatch from './components/Stopwatch'

function App() {
 

  return (
    <> 
      {/* <Section username="Justin" batch="React" />
      <Condition 
        isLoggedIn={true}
        Login={() => alert('Logging in')}
        Logout={() => alert('Logging out')}
      /> */}
      {/* <List numbers={numbers} cars={cars} /> */}
   
      <Form/>
      <Reducer/>
      <Stopwatch/>

     
    </>
  );
}

export default App;
