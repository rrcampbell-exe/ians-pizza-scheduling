import React from 'react'
import { useParams } from 'react-router-dom'

const SchedulingPage = () => {
  const { location } = useParams()

  return (
    `this is the scheduling page for ${location}`
  )
}

export default SchedulingPage
