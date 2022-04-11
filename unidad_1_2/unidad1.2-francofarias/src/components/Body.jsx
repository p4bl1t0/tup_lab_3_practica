import React from 'react'

const Body = ({body, estilo}) => {
  return (
    <div
    style={{
      fontStyle: estilo,
    }}
    >
      {body}
    </div>
  )
}

export default Body