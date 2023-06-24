import React from 'react'

const Alert = ({alert, text, color}) => {
  return (
    <div
        className={`alert ${
          alert ? "flex" : "hidden"
        } w-fit ${color? "bg-green-600" : "bg-red-600"} text-white py-2 px-4 text-[25px] absolute top-[100px]`}
      >
        {text}
      </div>
  )
}

export default Alert