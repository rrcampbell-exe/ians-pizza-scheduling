import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
      <div className='logo-container'>
        <h1>Ian's Pizza Scheduling</h1>
      </div>
      <div className='cluster-container'>
        <div className='cluster'>
          <h2>Madison</h2>
          <Link to='/frances'>
            <button>Frances</button>
          </Link>
          <Link to='/state'>
            <button>State St</button>
          </Link>
          <Link to='/garver'>
            <button>Garver</button>
          </Link>
        </div>
        <div className='cluster'>
          <h2>Milwaukee</h2>
          <Link to='/north'>
            <button>North</button>
          </Link>
          <Link to='juneau'>
            <button>Juneau</button>
          </Link>
          <Link to='story-hill'>
            <button>Story Hill</button>
          </Link>
        </div>
        <div className='cluster'>
          <h2>Seattle</h2>
          <Link to='fremont'>
            <button>Fremont</button>
          </Link>
          <Link to='capitol-hill'>
            <button>Capitol Hill</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default LandingPage
