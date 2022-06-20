import React from 'react';
import BlogPost from './BlogPost';
import Body from './Body';
import './Main.css';

const Main = ({body, links}) => {
  return (
    <div>
        <p>LAB 3 TUP 2022</p>
        
        <nav>
            <ul>
                <li>
                    <a href={links[0]}>Link 1</a>
                </li>
                <li>
                    <a href={links[1]}>Link 2</a>
                </li>
            </ul>
        </nav>
        <div className='mainbody'>
            <Body body={body}/>
        </div>
        <BlogPost title="Rosario vive un Día de la Bandera a pleno tras dos años de restricciones"
        body="El acto se inició con el izamiento de la bandera, acompañado por una emotiva versión Aurora 
        interpretada por Soledad Pastorutti y Jorge Fandermole. No asisten funcionarios del gobierno nacional"/> 
    </div>
  );
};

export default Main;