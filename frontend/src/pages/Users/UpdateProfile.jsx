import React from 'react'
import AxiosAPI, { signUp } from '../api/AxiosAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const {state}=useLocation()
 const  navigateTo=useNavigate();
  const handleSignUp=async(e)=>{
     e.preventDefault()
   
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    // Now formProps is an object with your form fields names as keys and their values as values
    // console.log("values:",formData);

   try {
    const res= await AxiosAPI.put(`user/${state.id}`, formData);
    console.log("update success:" , res);
    toast.success(res?.data?.msg)
 console.log(res);
 navigateTo("/")
   } catch (error) {
    console.log("signUp error:", error);
   }

  }
  return (
    <div>

<div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div className="relative py-3 sm:max-w-xl sm:mx-auto">
    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div className="max-w-md mx-auto">
        <div>
          <h1 className="text-2xl font-semibold">
           Update
          </h1>
        </div>

        <div className="divide-y divide-gray-200">
          <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          
            {/* <div className="relative">
              <input
                autoComplete="off"
               
                name="name"
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Email address"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
               Name 
              </label>
            </div>
            <div className="relative">
              <input
                autoComplete="off"
               
               
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="College Name"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                College Name
              </label>
            </div>
            <div className="relative">
              <input
                autoComplete="off"
               
               
                type="text"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Email address"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Email Address
              </label>
            </div>
            <div className="relative">rs
              <input
                autoComplete="off"
                id="password"
                name="password"
                type="password"
                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
              >
                Password
              </label>
            </div> */}
   
  <form onSubmit={handleSignUp} encType='multipart/form-data'>
            <div className="my-2 mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className="w-full">
                    <input type='text' defaultValue={state.name} x-model="input1" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Name" name='name'/>
                </div>
            </div>
            
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </button>
                </div>

                <div className="w-full">
                    <input type='text' defaultValue={state.email}  x-model="input3" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Email" name='email'/>
                </div>
            </div>
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-900" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </button>
                </div>

                <div className="w-full">
                    <input type='text'  defaultValue={state.phone} x-model="input2" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Phone" name="phone" />
                </div>
            </div>
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>

                    </button>
                </div>

                <div className="w-full">
                    <input type='text' defaultValue={state.college}  x-model="input2" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Collge" name="college" />
                </div>
            </div>
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                   
                    </button>
                </div>

                <div className="w-full">
                    <input type='text' defaultValue={state.yearOfStudy}  x-model="input2" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Year of Study/Passout Year" name="yearOfStudy" />
                </div>
            </div>
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-400q-33 0-56.5-23.5T80-480q0-33 23.5-56.5T160-560q33 0 56.5 23.5T240-480q0 33-23.5 56.5T160-400Zm66 228-56-56 174-174 56 56-174 174Zm120-388L172-734l56-56 174 174-56 56ZM480-80q-33 0-56.5-23.5T400-160q0-33 23.5-56.5T480-240q33 0 56.5 23.5T560-160q0 33-23.5 56.5T480-80Zm0-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Zm134 162-56-58 176-174 56 56-176 176Zm120 386L560-346l56-56 174 174-56 56Zm66-228q-33 0-56.5-23.5T720-480q0-33 23.5-56.5T800-560q33 0 56.5 23.5T880-480q0 33-23.5 56.5T800-400Z"/></svg>


                    </button>
                </div>

                <div className="w-full">
                    <input type='text' defaultValue={state.stream}  x-model="input2" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Branch/Stream" name="stream" />
                </div>
            </div>
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120v-680h360l16 80h224v400H520l-16-80H280v280h-80Zm300-440Zm86 160h134v-240H510l-16-80H280v240h290l16 80Z"/></svg>

                    </button>
                </div>

                <div className="w-full">
                    <input type='text' defaultValue={state.achievements}  x-model="input2" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Achievements" name="achievements" />
                </div>
            </div>
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-720h80v-80h-80v80Zm160 0v-80h80v80h-80ZM360-400v-80h80v80h-80Zm320-160v-80h80v80h-80Zm0 160v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm160-320v-80h80v80h-80Zm-240 80v-80h80v80h-80ZM200-160v-640h80v80h80v80h-80v80h80v80h-80v320h-80Zm400-320v-80h80v80h-80Zm-160 0v-80h80v80h-80Zm-80-80v-80h80v80h-80Zm160 0v-80h80v80h-80Zm80-80v-80h80v80h-80Z"/></svg>

                    </button>
                </div>

                <div className="w-full">
                    <input type='text' defaultValue={state.goals}  x-model="input2" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Goals" name='goals'/>
                </div>
            </div>
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
                       <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m80-520 200-360 200 360H80Zm200 400q-66 0-113-47t-47-113q0-67 47-113.5T280-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-280q0-33-23.5-56.5T280-360q-33 0-56.5 23.5T200-280q0 33 23.5 56.5T280-200Zm-64-400h128l-64-115-64 115Zm304 480v-320h320v320H520Zm80-80h160v-160H600v160Zm80-320q-57-48-95.5-81T523-659q-23-25-33-47t-10-47q0-45 31.5-76t78.5-31q27 0 50.5 12.5T680-813q16-22 39.5-34.5T770-860q47 0 78.5 31t31.5 76q0 25-10 47t-33 47q-23 25-61.5 58T680-520Zm0-105q72-60 96-85t24-41q0-13-7.5-21t-20.5-8q-10 0-19.5 5.5T729-755l-49 47-49-47q-14-14-23.5-19.5T588-780q-13 0-20.5 8t-7.5 21q0 16 24 41t96 85Zm0-78Zm-400 45Zm0 378Zm400 0Z"/></svg>

                    </button>
                </div>

                <div className="w-full">
                    <input type='text' defaultValue={state.interests} x-model="input2" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Interests" name="interests" />
                </div>
            </div>
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m430-500 283-283q12-12 28-12t28 12q12 12 12 28t-12 28L487-444l-57-56Zm99 99 254-255q12-12 28.5-12t28.5 12q12 12 12 28.5T840-599L586-345l-57-56ZM211-211q-91-91-91-219t91-219l120-120 59 59q7 7 12 14.5t10 15.5l148-149q12-12 28.5-12t28.5 12q12 12 12 28.5T617-772L444-599l-85 84 19 19q46 46 44 110t-49 111l-57-56q23-23 25.5-54.5T321-440l-47-46q-12-12-12-28.5t12-28.5l57-56q12-12 12-28.5T331-656l-64 64q-68 68-68 162.5T267-267q68 68 163 68t163-68l239-240q12-12 28.5-12t28.5 12q12 12 12 28.5T889-450L649-211q-91 91-219 91t-219-91Zm219-219ZM680-39v-81q66 0 113-47t47-113h81q0 100-70.5 170.5T680-39ZM39-680q0-100 70.5-170.5T280-921v81q-66 0-113 47t-47 113H39Z"/></svg>

                    </button>
                </div>

                <div className="w-full">
                    <input type='text' defaultValue={state.skills}  x-model="input2" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="I'm very good at" name='skills'/>
                </div>
            </div>
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
                    
                    </button>
                </div>

                <div className="w-full">
                    <input type="password" defaultValue={state.password}  x-model="input2" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Password" name="password" />
                </div>
            </div>
            <div className="my-2  mx-auto border-[2px]  justify-center flex items-center rounded-md shadow-md">
                <div>
                    <button type='button' className="flex items-center bg-gray-100 rounded-l-md border border-white justify-center w-12 h-12 text-white">
<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h360v80H200v560h560v-360h80v360q0 33-23.5 56.5T760-120H200Zm480-480v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80ZM240-280h480L570-480 450-320l-90-120-120 160Zm-40-480v560-560Z"/></svg>
                    
                    </button>
                </div>

                <div className="w-full">
                    <input type="file"   x-model="input2" className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none" placeholder="Photo" name="photo" />
                </div>
            </div>
       
            <div className="relative text-center">
              <button className="bg-blue-500 text-white rounded-md px-4 py-2" type="submit">
                Sign Up
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


      
    </div>
  )
}

export default UpdateProfile