import React, { useState } from "react";
export const cardsData = [
    {
      name: "Dany Bailey",
      role: "Software Engineer",
      description: "Lorem ipsum dolor sit amet...",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
    {
      name: "Lucy Carter",
      role: "Graphic Designer",
      description: "Lorem ipsum dolor sit amet...",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
    // Add more card data here as needed
    {
      name: "Jade Bradley",
      role: "Dev Ops",
      description: "Lorem ipsum dolor sit amet...",
      image:
        "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80",
    },
    // Add more card data here as needed
    {
      name: "Dany Bailey",
      role: "Software Engineer",
      description: "Lorem ipsum dolor sit amet...",
      image:
        "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    },
  ];
const ViewUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2; // Change this value to adjust the number of cards per page

  // Data for cards (you can replace this with your actual data)
  
  // Calculate the index range of cards to display for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardsData.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle next page click
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle previous page click
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="w-full bg-yellow-50 ">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {currentCards.map((card, index) => (
            <div
              key={index}
              className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row"
            >
              <div className="w-full md:w-3/5 h-80">
                <img
                  className="object-center object-cover w-full h-full"
                  src={`${card.image}`} // Placeholder image
                  alt="photo"
                />
              </div>
              <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
                <p className="text-xl text-white font-bold">{card.name}</p>
                <p className="text-base text-gray-400 font-normal">
                  {card.role}
                </p>
                <p className="text-base leading-relaxed text-gray-500 font-normal">
                  {card.description}
                </p>
              </div>
              <div className="flex justify-end items-end p-5">
              <div className="mr-4">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#ffffff">
      <path d="M363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </svg>
    <button className="text-white text-xl">Feedback</button>
  </div>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#ffffff">
      <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </svg>{" "}
    <span className="text-white text-xl">Chat</span>
  </div>
                
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
      </section>
    </div>
  );
};

{
  /* <div className="w-full bg-yellow-50">
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-80">
            <img
              className="object-center object-cover w-full h-full"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="photo"
            />
          </div>
          <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
            <p className="text-xl text-white font-bold">Dany Bailey</p>
            <p className="text-base text-gray-400 font-normal">
              Software Engineer
            </p>
            <p className="text-base leading-relaxed text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          
          </div>
        </div>
        <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-80">
            <img
              className="object-center object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="photo"
            />
          </div>
          <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
            <p className="text-xl text-white font-bold">Lucy Carter</p>
            <p className="text-base text-gray-400 font-normal">
              Graphic Designer
            </p>
            <p className="text-base leading-relaxed text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          
          </div>
        </div>
        <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-80">
            <img
              className="object-center object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1176&q=80"
              alt="photo"
            />
          </div>
          <div className="w-full md:w-3/5 text-left p-4 md:p-4 space-y-2">
            <p className="text-xl text-white font-bold">Jade Bradley</p>
            <p className="text-base text-gray-400 font-normal">Dev Ops</p>
            <p className="text-base leading-relaxed text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          <div className=' '>
          <i className="fa-regular fa-comment" style={{ color: "#f4f5f5" }} ></i>chat
          </div>
          </div>
        </div>
        <div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-2/5 h-80">
            <img
              className="object-center object-cover w-full h-full"
              src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
              alt="photo"
            />
          </div>
          <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
            <p className="text-xl text-white font-bold">Dany Bailey</p>
            <p className="text-base text-gray-400 font-normal">
              Software Engineer
            </p>
            <p className="text-base leading-relaxed text-gray-500 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          
          </div>
        </div>
    
      </div>
    </section>
  </div> */
}
export default ViewUsers;
