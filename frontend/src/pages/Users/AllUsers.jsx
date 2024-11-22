import React, { useEffect, useState } from "react";
import { cardsData } from "./ViewUsers";
import { Link } from "react-router-dom";
import AxiosAPI from "../api/AxiosAPI";
import { useSearch } from "../api/SearchContext";

const AllUsers = ({ handleClick }) => {
  const {setReciever}=useSearch()
  const [users, setUsers] = useState();
  const getAllUsers = async () => {
    const res = await AxiosAPI.get("user");
    console.log("users:", res.data.User);
    setUsers(res.data.User);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3; // Change this value to adjust the number of cards per page

  // Data for cards (you can replace this with your actual data)

  // Calculate the index range of cards to display for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = users?.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle next page click
  const nextPage = () => {

    setCurrentPage(currentPage + 1);
  };

  // Function to handle previous page click
  const prevPage = () => {
    // if(currentPage>=1)
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="">
      <div className="flex">
        {users&&currentCards.map((item, index) => (
          <div className="max-w-sm bg-white shadow-lg rounded-lg m-2 overflow-hidden my-4 ">
            <img
              className=" h-56 w-56 object-cover object-center"
              src={`${item.photo}`}
              alt="avatar"
            />
            <div className="flex items-center px-6 py-3 bg-gray-900">
              {/* <svg className="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
      <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
    </svg>
    */}{" "}
              <Link
                to={`/view/${item.id}`}
                className="mx-3 w-full text-center font-semibold text-lg bg-blue-500 text-white px-1 py-1 rounded-md hover:bg-blue-600"
              >
                View Profile
              </Link>
            </div>
            <div className="py-4 px-6">
              <h1 className="text-2xl font-semibold text-gray-800 text-wrap">
                {item.name}
              </h1>
              <p className="py-2 text-lg text-gray-700">{item.description}</p>
              <div className="flex items-center mt-4 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z" />
                </svg>

                <h1 className="px-2 text-sm">College: {item.college}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 -960 960 960"
                  width="24"
                >
                  <path d="M400-400h160v-80H400v80Zm0-120h320v-80H400v80Zm0-120h320v-80H400v80Zm-80 400q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
                </svg>

                <h1 className="px-2 text-sm">Stream: {item?.stream}</h1>
              </div>
              <div className="flex items-center mt-4 text-gray-700">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 512 512">
                  <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                </svg>
                <h1 className="px-2 text-sm">{item.email}</h1>
              </div>
            </div>
            <div className="flex p-5">
              {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" fill='#21e0ed' width="24"><path d="M480-40 360-160H200q-33 0-56.5-23.5T120-240v-560q0-33 23.5-56.5T200-880h560q33 0 56.5 23.5T840-800v560q0 33-23.5 56.5T760-160H600L480-40ZM200-286q54-53 125.5-83.5T480-400q83 0 154.5 30.5T760-286v-514H200v514Zm280-194q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41ZM280-240h400v-10q-42-35-93-52.5T480-320q-56 0-107 17.5T280-250v10Zm200-320q-25 0-42.5-17.5T420-620q0-25 17.5-42.5T480-680q25 0 42.5 17.5T540-620q0 25-17.5 42.5T480-560Zm0 17Z"/></svg> */}

              <button
                className="bg-blue-500 text-white px-1 py-1 mr-4 rounded-md hover:bg-blue-600 p-1"
                onClick={() => {
                  setReciever(item.id)
                  handleClick("chat")}}
              >
                <span>Message </span>
              </button>
              {/* <Link
                to={"/feedback/id"}
                className="bg-blue-500 text-white px-1 py-1 rounded-md hover:bg-blue-600 p-1"
                onClick={() => handleClick("chat")}
              >
                <span className=" ">Feedback </span>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-gray-900 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={prevPage}
          disabled={currentPage === 1} // Disable previous button on first page
        >
          Previous
        </button>
        <button
          className="bg-gray-900 text-white font-bold py-2 px-4 rounded"
          onClick={nextPage}
          disabled={indexOfLastCard >= cardsData.length} // Disable next button on last page
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllUsers;
