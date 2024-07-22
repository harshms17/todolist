import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className={`bck bg-[rgba(11, 1, 34, 0.306)] py-5 px-[100px]`}>
      <div className='w-full p-5 rounded-xl border-4 bg-blue-900/[0.1] border-white/75 transition-all duration-300 hover:scale-105'>
        <h1>Here is the <b>Contact Information</b></h1>
        <h1 className='my-4 mt-20 flex'>Name = HARSH SHARMA</h1>
        <h1 className='my-4 flex'>E-mail = harshsharma17072004@gmail.com</h1>
        <h1 className='my-4 flex'>Phone No. = 935XXXXX34</h1>
        <h1 className='my-4 flex'>Status = Available for work</h1>
        <h1 className='my-4 flex'>From Jaipur ,Rajasthan</h1>
      </div>
    </div>
  )
}

export default Contact
