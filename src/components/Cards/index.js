import React from 'react'
import Card from '../Card'
import single from '../../assets/images/single.png'
import double from '../../assets/images/double.png'
import triple from '../../assets/images/triple.png'

export default function Cards () {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <Card
          img={single}
          head='Single User'
          price='$149'
          data1='500 GB Storage'
          data2='1 Granted User'
          data3='Send up to 2 GB'
        />
        <Card
          img={double}
          head='Partnership'
          price='$199'
          data1='1 TB Storage'
          data2='3 Users Allowed'
          data3='Send up to 10 GB'
          customStyles='my-8 md:my-0 bg-gray-100'
        />
        <Card
          img={triple}
          head='Single User'
          price='$299'
          data1='5 TB Storage'
          data2='10 Users Allowed'
          data3='Send up to 20 GB'
        />
      </div>
    </div>
  )
}
