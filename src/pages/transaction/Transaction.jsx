import PaymentFor from '../../components/transaction/PaymentFor'
import PaymentMethod from '../../components/transaction/PaymentMethod'
import React from 'react'

const Transaction = () => {
  return (
    <section className='md:flex items-start border-8 relative'>
      <PaymentFor />
      <PaymentMethod />
    </section>
  )
}

export default Transaction
