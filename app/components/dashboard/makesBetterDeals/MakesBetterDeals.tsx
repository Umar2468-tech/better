
import React from 'react'
import Accordion from '../dropDown/DropDown'



const MakesBetterDeals = () => {
   
  return (
    <div>
        <div className='text-center bg-gray-100 p-10'>
            <h1 className='text-[37px] font-semibold'>
                What makes Better Deals Different?</h1>
            <p>Better Deals have 4 professional qualities that makes it standout among others</p>
            <div className="flex flex-col m-10 bg-gray-100 space-y-4">
      <Accordion
        title="Competitive Pricing"
        content="We at Better Deals are always one step ahead of offering prices that are market competitive due to our vast list of buyers and suppliers. We have become the leaders in offering competitive prices around the world. "
      />
      <Accordion
        title="Global Reach"
        content={
          <>
            <span className="font-bold text-[28px]">Shipment on time, as expected –</span>
            We understand that late and damaged shipment hurt your bottom line and your reputation. That’s why Better Deals has a mission first philosophy. We succeed every day because we do whatever it takes to deliver your shipment on time.
          </>
        }
      />
      <Accordion
        title="Quality Assurance"
        content="We prioritize quality in every transaction, ensuring that all products meet the highest standards and that our clients are completely satisfied with each deal."
      />
      <Accordion
        title="Customer Support"
        content="Our dedicated customer support team is available 24/7 to assist you with any inquiries, ensuring a smooth and supportive experience throughout."
      />
    </div>
    
        </div>
    </div>
  )
}

export default MakesBetterDeals