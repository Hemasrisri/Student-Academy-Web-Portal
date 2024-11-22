import React, { useState } from "react";
import Chat from "../chat/Chat";
import ViewUsers from "../Users/ViewUsers";
import ViewProfile from "../Users/ViewProfile";
import AddEvents from "../events/AddEvents";
import ViewEvents from "../events/ViewEvents";
import AllUsers from "../Users/AllUsers";
import { Link, useNavigate } from "react-router-dom";
import Post from "../Users/Post";
import ViewPosts from "../Users/ViewPosts";

const UserHome = () => {
  const [clicked, setClicked] = useState("explore");
  const navigateTo=useNavigate();
const user= JSON.parse(sessionStorage.getItem("user"));
// if(!user){ 
//   navigateTo("/");
//    alert("Login first");
// }
 
 
  const handleClick = (name) => {
    setClicked(name);
  };
  return (
    <div>
      <div className="relative bg-yellow-50 overflow-hidden max-h-screen">
        <header className="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between">
              {/* <div>
                <button
                  type="button"
                  className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="bi bi-chevron-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-sm">Archive</span>
                </button>
              </div>
              <div className="text-lg font-bold">Today's Plan</div>
              <div>
                <button
                  type="button"
                  className="flex items-center focus:outline-none rounded-lg text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent hover:border-yellow-300 focus:border-yellow-300 transition"
                >
                  <span className="text-sm">This week</span>
                  <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition ml-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </span>
                </button>
              </div> */}
              <div className="relative text-gray-600">
                <input
                  type="search"
                  name="serch"
                  placeholder="Search"
                  className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-3 mr-4"
                >
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style={{ enableBackground: "new 0 0 56.966 56.966" }}
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
          <div className="flex flex-col justify-between h-full">
            <div className="flex-grow">
              <div className="px-4 py-6 text-center border-b">
                <h1 className="text-xl font-bold leading-none">
                  <span className=" text-cyan-600">
                    Student's Academic Synergy web portal
                  </span>
                </h1>
              </div>
              <div className="p-4">
                <ul className="space-y-1">
                  {/* <li>
                    <Link
                      onClick={() => handleClick("home")}
                      className={`flex items-center  rounded-xl font-bold text-sm   py-3 px-4 ${clicked==="home"?"text-white bg-cyan-300":""}`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                      </svg>
                      Home
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      onClick={() => handleClick("explore")}
                      className={`flex  hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4 ${
                        clicked === "explore" ? "text-white bg-cyan-300" : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="m260-260 300-140 140-300-300 140-140 300Zm220-180q-17 0-28.5-11.5T440-480q0-17 11.5-28.5T480-520q17 0 28.5 11.5T520-480q0 17-11.5 28.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                      </svg>
                      Explore
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => handleClick("add")}
                      className={`flex  hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4${
                        clicked === "add" ? "text-white bg-cyan-300" : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                      </svg>
                      Add Event
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => handleClick("chat")}
                      className={`flex  hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4 ${
                        clicked === "chat" ? "text-white bg-cyan-300" : "chat"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z" />
                      </svg>
                      Chats
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => handleClick("post")}
                      className={`flex  hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4 ${
                        clicked === "post" ? "text-white bg-cyan-300" : "chat"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="M120-120v-720h720v720H120Zm600-160H240v60h480v-60Zm-480-60h480v-60H240v60Zm0-140h480v-240H240v240Zm0 200v60-60Zm0-60v-60 60Zm0-140v-240 240Zm0 80v-80 80Zm0 120v-60 60Z" />
                      </svg>
                      Post
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => handleClick("profile")}
                      className={`flex  hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4 ${
                        clicked === "profile" ? "text-white bg-cyan-300" : ""
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 -960 960 960"
                        width="24"
                      >
                        <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                      </svg>
                      Profile
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      onClick={() => handleClick("feedback")}
                      className={`flex items-center  rounded-xl font-bold text-sm   py-3 px-4 ${clicked==="feedback"?"text-white bg-cyan-300":""}`}
                    >
                                   <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" ><path d="m363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>

                      Give Feedback
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="p-4">
              <Link
                to={'/'}
                onClick={()=>sessionStorage.removeItem("user")}
                className="inline-flex items-center bg-gray-500 p-1 justify-center h-9 text-center rounded-xl  text-gray-300 hover:text-white text-sm font-semibold transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                </svg> <span className="font-bold text-xl text-dark ">Logout</span>
              </Link>{" "}
             
            </div>
          </div>
        </aside>
        <main className="ml-60 pt-16 max-h-screen overflow-auto">
          <div className="px-6 py-8">
            <div className="max-w-4xl mx-auto">
              {/* <div className=" rounded-3xl p-8 mb-5">
                <h1 className="text-3xl font-bold mb-10">
                  Messaging ID framework development for the marketing branch
                </h1>
                <div className="flex items-center justify-between">
                  <div className="flex items-stretch">
                    <div className="text-gray-400 text-xs">
                      Members
                      <br />
                      connected
                    </div>
                    <div className="h-100 border-l mx-4" />
                    <div className="flex flex-nowrap -space-x-3">
                      <div className="h-9 w-9">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://ui-avatars.com/api/?background=random"
                        />
                      </div>
                      <div className="h-9 w-9">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src="https://ui-avatars.com/api/?background=random"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        className="bi bi-chat-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                      </svg>
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                    >
                      Open
                    </button>
                  </div>
                </div>
                <hr className="my-10" />
                <div className="grid grid-cols-2 gap-x-20">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Stats</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <div className="p-4 bg-green-100 rounded-xl">
                          <div className="font-bold text-xl text-gray-800 leading-none">
                            Good day, <br />
                            Kristin
                          </div>
                          <div className="mt-5">
                            <button
                              type="button"
                              className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition"
                            >
                              Start tracking
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                        <div className="font-bold text-2xl leading-none">
                          20
                        </div>
                        <div className="mt-2">Tasks finished</div>
                      </div>
                      <div className="p-4 bg-yellow-100 rounded-xl text-gray-800">
                        <div className="font-bold text-2xl leading-none">
                          5,5
                        </div>
                        <div className="mt-2">Tracked hours</div>
                      </div>
                      <div className="col-span-2">
                        <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                          <div className="font-bold text-xl leading-none">
                            Your daily plan
                          </div>
                          <div className="mt-2">5 of 8 completed</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      Your tasks today
                    </h2>
                    <div className="space-y-4">
                      <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                        <div className="flex justify-between">
                          <div className="text-gray-400 text-xs">Number 10</div>
                          <div className="text-gray-400 text-xs">4h</div>
                        </div>
                        <Link
                          onClick={()=>handleClick("home")}
                          className="font-bold hover:text-yellow-800 hover:underline"
                        >
                          Blog and social posts
                        </Link>
                        <div className="text-sm text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            className="text-gray-800 inline align-middle mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                          Deadline is today
                        </div>
                      </div>
                      <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                        <div className="flex justify-between">
                          <div className="text-gray-400 text-xs">
                            Grace Aroma
                          </div>
                          <div className="text-gray-400 text-xs">7d</div>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="font-bold hover:text-yellow-800 hover:underline"
                        >
                          New campaign review
                        </a>
                        <div className="text-sm text-gray-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            className="text-gray-800 inline align-middle mr-1"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                          </svg>
                          New feedback
                        </div>
                      </div>
                      <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                        <div className="flex justify-between">
                          <div className="text-gray-400 text-xs">Petz App</div>
                          <div className="text-gray-400 text-xs">2h</div>
                        </div>
                        <a
                          href="javascript:void(0)"
                          className="font-bold hover:text-yellow-800 hover:underline"
                        >
                          Cross-platform and browser QA
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/*   */}

              {clicked === "explore" && (
                <div>
                  <AllUsers handleClick={handleClick} />
                  <ViewEvents />
                  <ViewPosts/>
                </div>
              )}
              {clicked === "add" && <AddEvents />}
              {clicked === "profile" && <ViewProfile />}
              {clicked === "chat" && <Chat handleClick={handleClick} />}
              {clicked==="post"&&<Post handleClick={handleClick}/>}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserHome;
