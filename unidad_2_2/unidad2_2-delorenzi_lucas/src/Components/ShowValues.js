import React from 'react'

const ShowValues = ({ array }) => {

    const evenCheck = (number) => {
        return number % 2 === 0 ? `${number} es PAR` : `${number} es IMPAR`;
    }

    return (
        <div>
            {array.map((element, index) =>
            (
                <div key={index}>
                    {isNaN(element) ? <input value={element} /> : <p>{evenCheck(Number(Math.round(element)))}</p>}
                </div>
            ))
            }
        </div>
    )
}

export default ShowValues