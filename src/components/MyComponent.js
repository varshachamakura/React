import React from 'react';

const numbers = [1, 2, 3];
function NumberList() {

  return (
    <>
      {numbers.map((num) => (
        <h1 key={num.toString()}>
          {num}
        </h1>
      ))}
    </>
  );
}

export default NumberList;
