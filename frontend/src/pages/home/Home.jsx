import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <>
  <nav className="bg-white shadow">
    <div className="container mx-auto px-6 py-3 ">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold text-gray-700">
            <a
              href="#"
              className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xl"
            >
             Student's Academic Synergy Web Portal
            </a>
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden -mx-4 md:flex md:items-center">
          {/* <a
            href="#"
            className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
          >
            Web developers
          </a>
          <a
            href="#"
            className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
          >
            Web Designers
          </a> */}
          <Link
           to={'/login'}
            className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600 "
          >
            Sign in 
          </Link>
          <Link
          to="/signup"
            className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  </nav>
  <div
    className="w-full bg-cover bg-center"
    style={{
      height: "32rem",
      backgroundImage:
        "url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)"
    }}
  >
    <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
      <div className="text-center">
        <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl">
          Build Your new <span className="underline text-blue-400">Ideas</span>
        </h1>
       <div className=' m-10'>
       <Link to={"/signup"} className="px-8 py-4 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
         Sign Up
        </Link >
       </div>
      </div>
    </div>
  </div>
</>
<footer className=' text-center bg-gray-800 min-h-20 text-white text-xl flex justify-center items-center'>
 <div className=''>&copy; All rights are reseved @  Student's Academic Synergy Web Portal</div>
</footer>
    </div>
  )
}

export default Home