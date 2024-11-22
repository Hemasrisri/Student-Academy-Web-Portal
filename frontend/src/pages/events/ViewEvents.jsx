import React, { useEffect, useState } from "react";
import AxiosAPI from "../api/AxiosAPI";

const ViewEvents = () => {
  const [events, setEvents] = useState();
  const getEvents = async () => {
    try {
      const res = await AxiosAPI.get(`event`);
      console.log(res.data.events);
      setEvents(res.data.events);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-2xl mb-4">EVENTS</h1>
      <div className="flex flex-col justify-center ">
        {events &&
          events.map((item) => (
            <div
              key={item.id}
              className=" mt-1 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white"
            >
              <div className="w-full md:w-1/3 bg-white grid place-items-center">
                <img
                  src={`${item.poster}`}
                  alt={item.eventName}
                  className="rounded-xl"
                />
              </div>
              <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                {/* <div className="flex justify-between item-center">
        <p className="text-gray-500 font-medium hidden md:block">Vacations</p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-gray-600 font-bold text-sm ml-1">
            4.96
            <span className="text-gray-500 font-normal">(76 reviews)</span>
          </p>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-pink-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
          Superhost
        </div>
      </div> */}
                <h3 className="font-black text-gray-800 md:text-3xl text-xl">
                  {item.eventName}
                </h3>
                <p className="md:text-lg text-gray-500 text-base">
                  <ul className="list-disc">
                    <li>
                      
                      <span>
                        <b>About Event</b>: {item.eventDescription}
                      </span>
                    </li>
                    <li>
                      <span className="">
                        <b>Type Of Event</b>: {item.typeOfEvent}
                      </span>
                    </li>
                    <li>
                      <span>
                        <b>Location</b>: {item.address}
                      </span>
                    </li>
                    <li>
                      
                      <span>
                        <b>Maximum Participant</b>:{item.maxParticipants}
                      </span>
                    </li>
                    <li>
                      
                      <span>
                        <b>Event Date</b>: {item.eventDate}
                      </span>
                    </li>
                    <li>
                      
                      <span>
                        <b>Contact</b>:{item.contact}
                      </span>
                    </li>
                  </ul>
                </p>
                <p className="text-xl font-black text-gray-800">
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                  {item.contributedAmount}/ person
                  <span className="font-normal text-gray-600 text-base"></span>
                </p>
              </div>
            </div>
          ))}
        {/* <div className=" mt-1 flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
          <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img
              src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="tailwind logo"
              className="rounded-xl"
            />
          </div>
          <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
            <div className="flex justify-between item-center">
        <p className="text-gray-500 font-medium hidden md:block">Vacations</p>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <p className="text-gray-600 font-bold text-sm ml-1">
            4.96
            <span className="text-gray-500 font-normal">(76 reviews)</span>
          </p>
        </div>
        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-pink-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
          Superhost
        </div>
      </div>
            <h3 className="font-black text-gray-800 md:text-3xl text-xl">
              The Majestic and Wonderful Bahamas
            </h3>
            <p className="md:text-lg text-gray-500 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              porro itaque officia nisi hic accusamus at, exercitationem a? Quia
              nisi adipisci illum voluptatibus itaque voluptate neque cupiditate
              asperiores necessitatibus amet!
            </p>
            <p className="text-xl font-black text-gray-800">
              <i className="fa-solid fa-indian-rupee-sign"></i>3000/ person
              <span className="font-normal text-gray-600 text-base"></span>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ViewEvents;
