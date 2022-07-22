import React from 'react'

const Checkbox = ({checkboxHandler, checkBoxValue}) => {
  return (
    <div>
        <label>
          <input
            type="checkbox"
            onChange={checkboxHandler}
            checked={checkBoxValue}
          />
          Entrada 2
        </label>
      </div>
  )
}

export default Checkbox