import React from 'react'

const TeamMember = ({photo, name, location, role}) => {
  return (
    <div className='team-member'>
      <div className='w-full border'>
        <img src={photo} alt={name} className='size-full' />
      </div>

      <div className='team-member-details'>
        <h4 className='text-base font-semibold'>{name}</h4>
        <p className='text-xs text-eco-neutral-prime'>{location}</p>
        <p className='text-xs text-eco-green'>{role}</p>
      </div>
    </div>
  )
}

export default TeamMember
