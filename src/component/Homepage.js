import React from 'react'
import EmplayeeList from './EmplayeeList'
import Header from './Header'
import Search from './Search'

function Homepage() {
  return (
    <div className='home'>
        <Header/>
        <Search/>
        <EmplayeeList/>
    </div>
  )
}

export default Homepage