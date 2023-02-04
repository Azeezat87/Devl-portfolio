import React from 'react'
import { useState } from 'react'

const Label = ({text, htmlFor, style}) => (
  <label htmlFor={htmlFor} style={style} className='text-lg text-[#2e304b] font-semibold md:text-black md:text-base'
  >
    {text}
  </label>
)

const Input = ({type, placeholder, id, name, onChange, value, style}) => (
  <input
    required
    autocomplete='off'
    type={type}
    placeholder={placeholder}
    id={id}
    name={name}
    onChange={onChange}
    value={value}
    style={style}
    className='bg-[#f7f7f7] p-4 w-[97%] rounded-[5px] font-medium mt-3 mb-6 focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde] transition duration-500 md:mb-8 md:rounded-[8px]'
  />
);

export default function Form(props) {

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
      <Label htmlFor='name' text='Name' />
      <br />
      <Input
        type='text'
        placeholder='Tom Jones'
        id='name'
        name='name'
        onChange={handleChange}
        value={formData.name}
      />
      <br />

      <Label htmlFor='email' text='Email' />
      <br />
      <Input
        type='email'
        placeholder='hello@example.com'
        id='email'
        name='email'
        onChange={handleChange}
        value={formData.email}
      />
      <br />

      <Label htmlFor='company' text='Company' />
      <br />
      <Input
        type='text'
        placeholder='Google Inc.'
        id='company'
        name='company'
        onChange={handleChange}
        value={formData.company}
      />
      <br />

      {props.type !== 'hello' && (
        <>
          <Label htmlFor='budget' text='Budget' />
          <br />
          <Input
            type='text'
            placeholder='$5,000 - $8,000'
            id='budget'
            name='budget'
            onChange={handleChange}
            value={formData.budget}
          />
          <br />

          <div className='flex gap-[28px] md:flex-col'>
            <div>
              <Label htmlFor='startDate' text='Start Date' />
              <br />
              <Input
                type='date'
                id='startDate'
                name='startDate'
                onChange={handleChange}
                value={formData.startDate}
                style={{ width: contact ? '' : '228px', color: '#5f5f6c' }}
              />
            </div>
            <div className='md:-mt-7'>
              <Label htmlFor='endDate' text='End Date' />
              <br />
              <Input
                type='date'
                id='endDate'
                name='endDate'
                onChange={handleChange}
                value={formData.endDate}
                style={{ width: contact ? '' : '228px', color: '#5f5f6c' }}
              />
            </div>
          </div>
        </>
      )}

      <Label htmlFor='message' text='Message' />
      <br />
      <textarea
        required
        type='text'
        placeholder='I heard you were the best!'
        id='message'
        name='message'
        onChange={handleChange}
        value={formData.message}
        className='bg-[#f7f7f7] p-4 w-[97%] rounded-[5px] font-medium mt-3 mb-6 focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde] min-h-[45%] transition duration-500 md:min-h-[25%]'
      />
      <br />
      <Label htmlFor='budget' text='How did you find me?' />
      <br />
      <select
        required
        id='how'
        name='how'
        onChange={handleChange}
        value={formData.how}
        className='bg-[#f7f7f7] p-4 w-[97%] rounded-[5px] font-medium mt-3 mb-6 focus:outline-none focus:bg-white focus:border-2 focus:border-[#54dcde] md:mb-8'
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
      <Label
        htmlFor='agree'
        text='I agree to be a nice and kind person!'
        style={{ fontSize: '16px', color: '#717175', fontWeight: '600' }}
      />
      <br />
      <br />
      <button className='border-2 border-[#fd8e8e] rounded-full py-[14px] px-[28px] flex justify-center mb-10 hover:bg-[#fd8e8e] hover:text-black whitespace-nowrap text-lg text-[#fd8e8e] font-semibold md:mt-2 md:mb-0 md:text-base md:py-[10px] md:px-[25px]' >
        Send message
      </button>
    </form>
  );
}
