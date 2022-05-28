import React from 'react'

export default function FooterListing (props) {
  return (
    <div>
      <h6 className='font-medium text-gray-400'>{props.title}</h6>
      <ul>
        <li className='py-2 text-sm'>{props.text1}</li>
        <li className='py-2 text-sm'>{props.text2}</li>
        <li className='py-2 text-sm'>{props.text3}</li>
        {props.text4 && <li className='py-2 text-sm'>{props.text4}</li>}
        {props.text5 && <li className='py-2 text-sm'>{props.text5}</li>}
      </ul>
    </div>
  )
}
