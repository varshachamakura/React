import React from 'react';
import Section from './components/Section';
import Condition from './components/Condition';
import MyComponent from './components/MyComponent';
import List from './components/List'; // Ensure the name matches

function App() {
  const numbers = [1, 2, 3, 4, 5];
  const cars = [
    { id: 1, brand: 'Toyota', color: 'blue', isActive: true },
    { id: 2, brand: 'BMW', color: 'black', isActive: true },
    { id: 3, brand: 'Suzuki', color: 'red', isActive: true }
  ];

  return (
    <> 
      <Section username="Justin" batch="React" />
      <Condition 
        isLoggedIn={true}
        Login={() => alert('Logging in')}
        Logout={() => alert('Logging out')}
      />
      <MyComponent />
      <List numbers={numbers} cars={cars} />
    </>
  );
}

export default App;
