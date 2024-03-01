import React from 'react'

import BoraBora from '../assets/Grid/borabora2.jpg';
import bike from '../assets/Grid/bike.jpg';
import rafting from '../assets/Grid/rafting.jpg';
import waterfall from '../assets/Grid/waterfall.jpg';
import Card from '../components/Card'


const Grid = () => {
  return (
    <div className='max-w-screen mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

      <Card bg={BoraBora} text='Beaches' />
      <Card bg={bike} text='Bike Tails' />
      <Card bg={rafting} text='River Rafting' />
      <Card bg={waterfall} text='Waterfalls' />
    </div>
  )
}

export default Grid