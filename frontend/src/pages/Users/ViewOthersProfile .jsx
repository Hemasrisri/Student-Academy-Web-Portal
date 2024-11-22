import React, { useEffect, useState } from "react";
import { cardsData } from "./ViewUsers";
import { Link, useNavigate, useParams } from "react-router-dom";
import AxiosAPI from "../api/AxiosAPI";
import { useSearch } from "../api/SearchContext";

const ViewOthersProfile = () => {
  const { id } = useParams();
  const { setReciever } = useSearch();
  // useEffect(()=>{
  //   setReciever(id)
  // }, [id])
  const [user, setUser] = useState();
  const getBYIdUser = async () => {
    try {
      const res = await AxiosAPI.get(`/user/${id}`);
      console.log(res.data.user, "User");
      setUser(res.data.user);
    } catch (error) {
      console.log("get user error:", error);
    }
  };
  const [feedbacks, setFeedbacks] = useState([]);
  const getBYIdRating = async () => {
    try {
      const res = await AxiosAPI.get(`/feedback/receiver/${id}`);
      setFeedbacks(res.data.Feedback);
      console.log(res.data.Feedback);

      // console.log(res.data.user, "User");
      // setUser(res.data.user);
    } catch (error) {
      console.log("get feedback error:", error);
    }
  };
  useEffect(() => {
    getBYIdUser();
  }, [id]);
  useEffect(() => {
    getBYIdRating();
  }, [id]);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 2; // Change this value to adjust the number of cards per page

  // Data for cards (you can replace this with your actual data)

  // Calculate the index range of cards to display for the current page
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentFeedbacks = feedbacks.slice(indexOfFirstCard, indexOfLastCard);

  // Function to handle next page click
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Function to handle previous page click
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const navigateTo = useNavigate();

  return (
    <div>
      <main className="profile-page">
        <section className="relative py-16 bg-blueGray-200 mt-80 ">
          {user && (
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <img
                          alt="..."
                          src={`${user?.photo}`}
                          className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-10  max-w-150-px"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <Link
                          onClick={() => setReciever(user.id)}
                          className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          to={`/chat`}
                        >
                          message
                        </Link>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        {/* <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div> */}
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                            89
                          </span>
                          <span className="text-sm text-blueGray-400">
                            Reviews
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className=" align-middle -mt-36 ml-36">
                        <img
                          alt="..."
                          src={`${user?.photo}`}
                          className="rounded-full w-80 h-32 ml-20 lg:ml-32  align-middle shadow-xl  "
                          style={{ marginTop: "-50px" }}
                          //className="shadow-xl rounded-full h-auto align-middle border-none absolute m-16 ml-20 lg:ml-16 max-w-150-px"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0"></div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                      {user?.name}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
              Los Angeles, California */}
                    </div>
                    <div className="mb-2 text-blueGray-600 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                      Collge : {user?.college}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                      Branch : {user?.stream}
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
                          onClick={() =>
                            navigateTo(`/feedback/${user.id}`, { state: user })
                          }
                          className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                          // to={`/feedback/${user.id}`}
                        >
                          Give Feedback
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="bg-gray-100 flex items-center justify-center">
            {currentFeedbacks.length > 0 && (
              <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentFeedbacks.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="bg-white p-4 rounded-md shadow-md"
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-2">
                        <img
                          src={feedback.user.photo}
                          alt="Sender"
                          className="w-8 h-8 rounded-full"
                        />
                      </div>
                      <div>
                        <p className="font-semibold">{feedback.user.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div>
                        {[...Array(feedback.rating)].map((_, index) => (
                          <span key={index} role="img" aria-label="star">
                            ⭐
                          </span>
                        ))}
                      </div>
                      <p className="ml-2">{feedback.description}</p>
                    </div>
                    <p className="text-gray-500 mt-2">
                      {new Date(feedback.date).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
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
      </main>
    </div>
  );
};

export default ViewOthersProfile;
