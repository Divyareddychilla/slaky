import React from 'react'
import TeamsSidebar from './teamsSidebar/TeamsSidebar';
import Header from './Header'
const TeamsLayout = () => {
  return (
    <div className='page-layout'>
       <Header />
        <div className='main-div'>
          <div className='d-flex align-items-center'>
                <TeamsSidebar />
                <div className='content'>
                jdbjbdsc
                </div>
              </div>
        </div>
    </div>
  )
}

export default TeamsLayout