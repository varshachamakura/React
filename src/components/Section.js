import React from 'react';

function Section(props) {
  return (
    <>
      <h2>This is section, <i>{props.username}</i> from batch <b>{props.batch}</b></h2>
    </>
  );
}

export default Section;
