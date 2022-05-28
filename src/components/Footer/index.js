import React from 'react'
import Title from '../Title'
import loremText from '../../assets/loremText'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare
} from 'react-icons/fa'
import FooterListing from '../FooterListing'

export default function Footer () {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <Title />
        <p className='py-4'>{loremText}</p>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-12'>
        {
          listingData.map((list, i) => (
            <FooterListing key={i}
              title={list.title}
              text1={list.text1}
              text2={list.text2}
              text3={list.text3}
              text4={list.text4}
              text5={list.text5}
            />
          ))
        }
      </div>
    </div>
  )
}

const listingData = [
  {
    title: 'Solutions',
    text1: 'Analytics',
    text2: 'Marketing',
    text3: 'Commerce',
    text4: 'Insights'
  },
  {
    title: 'Support',
    text1: 'Pricing',
    text2: 'Documentation',
    text3: 'Guides',
    text4: 'API Status'
  },
  {
    title: 'Company',
    text1: 'About',
    text2: 'Blog',
    text3: 'Jobs',
    text4: 'Press',
    text5: 'Careers'
  },
  {
    title: 'Legal',
    text1: 'Claim',
    text2: 'Policy',
    text3: 'Terms'
  }
]
