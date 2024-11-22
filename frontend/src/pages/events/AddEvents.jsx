import React, { useState } from 'react'
import AxiosAPI from '../api/AxiosAPI';
import { toast } from 'react-toastify';

const AddEvents = () => {
  const [poster ,setPoster]=useState();
  const handleFile=(e)=>setPoster(e.target.files[0]);
  const user=JSON.parse(sessionStorage.getItem("user"))
  const handleSubmitEvent=async(e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    formData.append ("poster", poster)
    const formProps = Object.fromEntries(formData);
    try {
    const res=await  AxiosAPI.post(`event/add/${user.id}`, formData);
    toast.success(res.data?.msg);
    console.log(formData);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg)
    }

  }
  return (
    <div>
        <>
  <section className="max-w-4xl p-6 mx-auto bg-teal-700 rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 className="text-xl font-bold text-white capitalize dark:text-white">
      Add Event
    </h1>
    <form onSubmit={handleSubmitEvent}>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label className="text-white dark:text-gray-200" htmlFor="username">
           Event Name
          </label>
          <input
            id="eventName"
            name='eventName'
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="emailAddress"
          >
             Address/Location
          </label>
          <input
            id="address"
            name='address'
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label className="text-white dark:text-gray-200" htmlFor="password">
            Contact
          </label>
          <input
            id="contact"
            name='contact'
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
           Organizer
          </label>
          <input
            id="organizer"
            name='organizer'
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Contribution Amount
          </label>
          <input
            id="contributedAmount"
            name='contributedAmount'
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Type of Event
          </label>
          {/* <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
            <option>Surabaya</option>
            <option>Jakarta</option>
            <option>Tangerang</option>
            <option>Bandung</option>
          </select> */}
           <input
            name='typeOfEvent'
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
          Max Participants
          </label>
          <input
            id="maxParticipants"
            name='maxParticipants'
            type="text"
            className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
          Event Date
          </label>
          <input
            id="date"
            type="date"
            name='eventDate'
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-white dark:text-gray-200"
            htmlFor="eventDescription"
          >
            Event Description
          </label>
          <textarea
            id="eventDescription"
            name='eventDescription'
            type="textarea"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Poster</label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span className="">Upload a file</span>
                  <input
                    id="file-upload"
                    //name="poster"
                    type="file"
                    onChange={handleFile}
                    className="sr-only"
                  />
                </label>
                
              </div>
              <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button type='submit' className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
          Add
        </button>
      </div>
    </form>
  </section>
  {/* <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
      Account settings
    </h2>
    <form>
      <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="username"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="emailAddress"
          >
            Email Address
          </label>
          <input
            id="emailAddress"
            type="email"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
        <div>
          <label
            className="text-gray-700 dark:text-gray-200"
            htmlFor="passwordConfirmation"
          >
            Password Confirmation
          </label>
          <input
            id="passwordConfirmation"
            type="password"
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
          Save
        </button>
      </div>
    </form>
  </section> */}
</>

    </div>
  )
}

export default AddEvents