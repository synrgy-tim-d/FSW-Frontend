import React from 'react'
import TestimonialCard from './testimonialCard'
const testinomialsCount = 8;
function Testimonial() {
  return (
    <div className='w-full flex flex-wrap gap-5 py-3'>
        <div className='flex gap-6'>
          {(() => {
            let testimonials = [];
            for (let i = 0; i < testinomialsCount; i++) {
              testimonials.push(
                <TestimonialCard move={"move-right"}/>) 
            }
            return testimonials
          })()}
        </div>
        <div className='flex gap-6'>
          {(() => {
            let testimonials = [];
            for (let i = 0; i < testinomialsCount; i++) {
              testimonials.push(
                <TestimonialCard move={"move-left"}/>) 
            }
            return testimonials
          })()}
        </div>
    </div>
  )
}

export default Testimonial
