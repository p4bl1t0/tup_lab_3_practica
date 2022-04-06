import Body from './Body'
import React from 'react';

const Main = ({pageBody, siteOne, siteTwo}) => {
  return (    
      <div>
        <Body pageBody={pageBody}/>
        <ul>
            <li>{siteOne}</li>
            <li>{siteTwo}</li>
        </ul>
        <p>No sos vos soy yo</p>
      </div>      
  )
}

export default Main;