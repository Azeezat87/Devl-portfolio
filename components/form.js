import React from 'react'
import {useState} from 'react'

export default function Form() {

  const [formData, setFormData] = useState(
    {
      name: '',
      email: '',
      company: '',
      budget: '',
      startDate: '',
      endDate: '',
      message: '',
      how: '',
      agree: true
    }
  );

  function handleChange(event){
    const {name, value, type, checked} = event.target
    setFormData(prev => {
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }
  
  function handleSubmit(event){
    event.preventDefault()
    // to submit formData
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit} className='flex-1 overflow-auto'>
      <label htmlFor='name' className='text-lg text-[#2e304b] font-semibold'>
        Name
      </label>
      <br />
      <input
        required
        autocomplete='off'
        type='text'
        placeholder='Tom Jones'
        id='name'
        name='name'
        onChange={handleChange}
        value={formData.name}
        className='bg-[#f7f7f7] p-4 w-[97%] rounded-[5px] font-medium mt-3 mb-6 focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde] transition duration-500'
      />
      <br />
      <label htmlFor='email' className='text-lg text-[#2e304b] font-semibold'>
        Email
      </label>
      <br />
      <input
        required
        autocomplete='off'
        type='email'
        placeholder='hello@example.com'
        id='email'
        name='email'
        onChange={handleChange}
        value={formData.email}
        className='bg-[#f7f7f7] p-4 w-[97%] rounded-[5px] font-medium mt-3 mb-6 focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde] transition duration-500'
      />
      <br />
      <label htmlFor='company' className='text-lg text-[#2e304b] font-semibold'>
        Company
      </label>
      <br />
      <input
        required
        autocomplete='off'
        type='text'
        placeholder='Google Inc.'
        id='company'
        name='company'
        onChange={handleChange}
        value={formData.company}
        className='bg-[#f7f7f7] p-4 w-[97%] rounded-[5px] font-medium mt-3 mb-6 focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde] transition duration-500'
      />
      <br />
      <label htmlFor='budget' className='text-lg text-[#2e304b] font-semibold'>
        Budget
      </label>
      <br />
      <input
        required
        type='text'
        placeholder='$5,000 - $8,000'
        id='budget'
        name='budget'
        onChange={handleChange}
        value={formData.budget}
        className='bg-[#f7f7f7] p-4 w-[97%] rounded-[5px] font-medium mt-3 mb-6 focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde] transition duration-500'
      />
      <br />
      <div className='flex gap-[28px]'>
        <div>
          <label
            htmlFor='startDate'
            className='text-lg text-[#2e304b] font-semibold'
          >
            Start date
          </label>
          <br />
          <input
            required
            type='date'
            id='startDate'
            name='startDate'
            onChange={handleChange}
            value={formData.startDate}
            className='bg-[#f7f7f7] text-[#5f5f6c] p-4 rounded-[5px] font-medium mt-3 mb-6 w-[228px] focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde] transition duration-500'
          />
        </div>
        <div>
          <label
            required
            htmlFor='endDate'
            className='text-lg text-[#2e304b] font-semibold'
          >
            End date
          </label>
          <br />
          <input
            required
            type='date'
            id='endDate'
            name='endDate'
            onChange={handleChange}
            value={formData.endDate}
            className='bg-[#f7f7f7] text-[#5f5f6c] p-4 rounded-[5px] font-medium mt-3 mb-6 w-[228px] focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde] transition duration-500'
          />
        </div>
      </div>
      <br />
      <label htmlFor='message' className='text-lg text-[#2e304b] font-semibold'>
        Message
      </label>
      <br />
      <textarea
        required
        type='text'
        placeholder='I heard you were the best!'
        id='message'
        name='message'
        onChange={handleChange}
        value={formData.message}
        className='bg-[#f7f7f7] p-4 w-[97%] rounded-[5px] font-medium mt-3 mb-6 focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde] min-h-[45%] transition duration-500'
      />
      <br />
      <label htmlFor='how' className='text-lg text-[#2e304b] font-semibold'>
        How did you find me?
      </label>
      <br />
      <select
        required
        id='how'
        name='how'
        onChange={handleChange}
        value={formData.how}
        className='bg-[#f7f7f7] p-4 w-[97%] rounded-[5px] font-medium mt-3 mb-6 focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde]'
      >
        <option value disabled='disabled' selected='selected'>
          How did you find me?
        </option>
        <option value='colleagues'>We&apos;ve worked together before</option>
        <option value='recommendation'>I was recommended by someone</option>
        <option value='search'>I found you through a search engine</option>
        <option value='social'>I saw you on social media</option>
      </select>
      <br />
      <input
        required
        type='checkbox'
        id='agree'
        checked={formData.agree}
        onChange={handleChange}
        name='agree'
        className='mr-4'
      />
      <label htmlFor='agree' className='text-base text-[#717175] font-semibold '>
        I agree to be a nice person!
      </label>
      <br />
      <br />
      <button className='border-2 border-[#fd8e8e] rounded-full py-[14px] px-[28px] flex justify-center mb-10 hover:bg-[#fd8e8e] hover:text-black whitespace-nowrap text-lg text-[#fd8e8e] font-semibold'>
        Send message
      </button>
    </form>
  );
}
