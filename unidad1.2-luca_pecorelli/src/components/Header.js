import React from 'react'
import Title from './title'

const Header = ({pageTitle}) => {
  return (
    <div>
        <Title pageTitle={pageTitle} />
    </div>
  );
}

export default Header