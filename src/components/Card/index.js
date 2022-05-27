import React from 'react'
import Button from '../Button'

export default function Card (props) {
  return (
    <div className={`w-full shadow-xl flex-col p-4 my-4 rounded-lg hover:scale-105 duration-200 ${props.customStyles}`}>
      <img
        src={props.img}
        className='w-20 mx-auto mt-[-3rem] bg-transparent'
      />
      <h2 className='text-2xl font-bold text-center py-8'>{props.head}</h2>
      <p className='text-center text-4xl font-bold'>{props.price}</p>
      <div className='text-center font-medium'>
        <p className='py-2 border-b mx-8 mt-8'>{props.data1}</p>
        <p className='py-2 border-b mx-8'>{props.data2}</p>
        <p className='py-2 border-b mx-8'>{props.data3}</p>
      </div>
      <Button
        text='Start Trial'
        customStyles='bg-[#00df9a]'
      />
    </div>
  )
}
