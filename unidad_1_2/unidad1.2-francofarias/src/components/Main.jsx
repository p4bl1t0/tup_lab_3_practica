import React from 'react'

const Main = ({body, youtube, google}) => {
  return (
    <div>
        <p>{body}</p>
        <nav>
          <ul>
            <li>
            <a href={google}>Google</a>
            </li>
            <li>
            <a href={youtube}>Youtube</a>
            </li>
          </ul>
        </nav>
        <p>Programador en curso...</p>
    </div>
  )
}

export default Main