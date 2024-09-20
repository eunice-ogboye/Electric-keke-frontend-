import PaymentFor from '../../components/transaction/PaymentFor'
import PaymentMethod from '../../components/transaction/PaymentMethod'
import React from 'react'

const Transaction = () => {
  return (
    <section className='md:flex items-stretch'>
      <PaymentFor />
      <PaymentMethod />
    </section>
  )
}

export default Transaction
