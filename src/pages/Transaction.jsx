import PaymentFor from '@/features/transaction/components/PaymentFor'
import PaymentMethod from '@/features/transaction/components/PaymentMethod'

const Transaction = () => {
  return (
    <section className='md:flex items-start border-8 relative'>
      <PaymentFor />
      <PaymentMethod />
    </section>
  )
}

export default Transaction
