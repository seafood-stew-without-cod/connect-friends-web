import React from 'react';

const Container = ({ children, title }) => {
  return (
    <div className='container'>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Container;
