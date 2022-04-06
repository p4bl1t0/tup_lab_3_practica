import Title from './Title';
import React from 'react';

const Header = ({pageTitle}) => {
  return (
    <div>
      <Title pageTitle={pageTitle}/>
    </div>    
  )
}

export default Header;