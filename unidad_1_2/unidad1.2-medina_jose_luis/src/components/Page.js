import React from 'react'
import Header from './Header';
import Main from './Main';

const Page = ({pageTitle, pageBody}) => {
  return (
    <div>
        <Header pageTitle={pageTitle}></Header>
        <Main pageBody={pageBody}
            link={'https://www.amazon.com/'}
            link2={'https://www.google.com/'}></Main>
    </div>
  );
};

export default Page;