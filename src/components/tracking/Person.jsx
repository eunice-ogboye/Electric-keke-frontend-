import React from 'react'

const Person = ({role, fullname}) => {
  return (
    <div className="person-details">
    <div className="person-photo-container">
      <img
        src="/persons/rider1.png"
        alt="person name"
        className="person-photo"
      />
    </div>

    <div className="person-credentials">
      <div>
        <p className="person-name">
          {fullname}
        </p>
        {role === 'user' &&<p className="rider-status">On his way...</p>}
      </div>

      <div className="ride-cta">
        <div className="ride-cta-icon">
          <img src="/chat-rider.svg" alt="chat person" />
        </div>
        <div className="ride-cta-icon">
          <img src="/call-rider.svg" alt="call person" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Person
