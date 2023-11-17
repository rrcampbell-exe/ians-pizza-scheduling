import React from 'react'

const LandingPage = () => {
  return (
    <div className='cluster-container'>
      <div className='cluster'>
        <h1>Madison</h1>
        <button id='frances'>Frances</button>
        <button id='state'>State</button>
        <button id='garver'>Garver</button>
      </div>
      <div className='cluster'>
        <h1>Milwaukee</h1>
        <button id='north-ave'>North</button>
        <button id='juneau'>Juneau</button>
        <button id='story-hill'>Story Hill</button>
      </div>
      <div className='cluster'>
        <h1>Seattle</h1>
        <button id='fremont'>Fremont</button>
        <button id='capitol-hill'>Capitol Hill</button>
      </div>
    </div>
  )
}

export default LandingPage
