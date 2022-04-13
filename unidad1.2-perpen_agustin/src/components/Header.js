import Title from './Title';
import React from 'react';


const Header = ({title}) => {
  return (
    <div>
      <Title title={title}/>
      <Title titleNews={titleNews}/>
    </div>    
  )
}

export default Header;