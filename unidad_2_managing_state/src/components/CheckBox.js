import React from 'react'

const CheckBox = ({checkboxInput, checkboxHandler}) => {
  return (
    <div>
        <label>
          <input type="checkbox" onChange={checkboxHandler} checkboxInput={checkboxInput} /> Entrada 2
        </label>
    </div>
  )
}

export default CheckBox