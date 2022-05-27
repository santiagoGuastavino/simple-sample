import React from 'react'

export default function Button ({ customStyles, text }) {
  return (
    <button className={`w-[200px] rounded-md font-medium my-6 mx-auto py-3 block px-6 ${customStyles}`}>
      {text}
    </button>
  )
}
