import React from 'react'
import { useNavigate } from 'react-router-dom';

const ViewProfile = () => {
const user =JSON.parse(sessionStorage.getItem("user"));
const navgateTo=useNavigate();
  return (
    <div>
        <main className="profile-page">
 
  <section className=" py-16 bg-blueGray-200 mt-80">
    <div className="container mx-auto px-4">
      <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="">
                <img
                  alt="..."
                  src={`${user.photo}`}
                  className='rounded-full h-32 w-80   ml-20 lg:ml-32 max-w-150-px align-middle shadow-xl'
                  style={{marginTop:"-50px"}}
                  //className="shadow-xl rounded-full h-auto align-middle border-none absolute m-16 ml-20 lg:ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
             
              </div>
            </div>
          
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
             {user.name}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
              Los Angeles, California */}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
            College: {user.college}
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
              Branch: {user.stream}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
              <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      
                      <ul className="">
                        <li>Skills: {user.skills} </li>
                        <li>Achievements: {user.achievements} </li>
                        <li>Goals: {user.goals}</li>
                        <li> Interest: {user.interests}</li>
                        <li>Year of Study: {user.yearOfStudy}</li>
                      </ul>
                      </p>
                <button
                  className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={()=>{
                    navgateTo(`/update/${user.id}`, {state:user})
                  }}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </section>
</main>

    </div>
  )
}

export default ViewProfile