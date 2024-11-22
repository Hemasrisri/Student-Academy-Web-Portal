import React, { useEffect, useState } from "react";
import AxiosAPI from "../api/AxiosAPI";
import { useSearch } from "../api/SearchContext";

const Chat = () => {
  const { reciever, setReciever } = useSearch();
  const [message, setMessage] = useState("");
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [users, setUsers] = useState([]);
  const [file, setFile] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleFile = (e) => setFile(e.target.files[0]);

  const getAllUsers = async () => {
    try {
      const res = await AxiosAPI.get("user");
      setUsers(res.data.User);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async () => {
    const formData = new FormData();
    formData.append("sender", user.id);
    formData.append("receiver", reciever);
    formData.append("content", message);
    file && formData.append("file", file);

    try {
      const res = await AxiosAPI.post("message", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("message response:", res);
      // After sending the message, fetch updated messages
      getAllMessages();
    } catch (error) {
      console.log("Message error:", error);
    }
  };

  const getAllMessages = async () => {
    try {
      const res = await AxiosAPI.get(`message/${user.id}/${reciever}`);
      if (res.data.success) {
        setMessages(res.data.msg); // Set messages state with the received messages
      } else {
        console.error("Failed to fetch messages:", res.data.msg);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    getAllMessages();
  }, [reciever]); // Fetch messages whenever receiver changes

  return (
    <div className="container mx-auto h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
          <div className="font-semibold text-2xl">Chat</div>
        </div>
        {/* End Header */}

        {/* Chatting */}
        <div className="flex flex-row bg-white">
          {/* Chat list */}
          <div className="w-1/4 border-r-2 overflow-y-auto">
            {users.map((item) => (
              <div
                key={item.id}
                onClick={() => setReciever(item.id)}
                className={`flex cursor-pointer flex-row py-4 px-2 justify-center items-center border-b-2 ${
                  item.id === reciever ? "border-l-4 border-blue-400" : ""
                }`}
              >
                <img
                  src={item.photo}
                  className="object-cover h-12 w-12 rounded-full mr-2"
                  alt=""
                />
                <div>
                  <div className="text-lg font-semibold">{item.name}</div>
                  <span className="text-gray-500">{item.email}</span>
                </div>
                
              </div>
              
            ))
            }
          </div>
          {/* End chat list */}

          {/* Messages */}
          {messages.length > 0 && (
            <div className="flex-1 p-5 overflow-y-auto">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex mb-4 ${
                    msg.sender.id === user.id ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="flex items-center">
                    {msg.sender.id !== user.id && (
                      <img
                        src={msg.sender.photo}
                        alt={msg.sender.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    )}
                    <div>
                      {msg.sender.id !== user.id && (
                        <span className="text-sm text-gray-600">
                          {msg.sender.name}
                        </span>
                      )}
                      <div className="bg-gray-200 p-3 rounded-lg">
                        <p>{msg.content}</p>
                        {/* Render attached file if available */}
                        {/* {msg.filename && (
                          <img
                            src={msg.filename}
                            alt="Attached file"
                            className="mt-2 max-w-xs"
                          />
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {/* End messages */}
        </div>
      </div>
      {/* Message input */}
      <div className="flex items-center p-5">
        <input
          className="flex-1 bg-gray-200 py-3 px-4 rounded-xl mr-2"
          type="text"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {/* <label className="file-upload inline-block relative">
          <input type="file" className="hidden" onChange={handleFile} />
          <i className="fa-solid fa-paperclip"></i>
        </label> */}
        <button
          className="fa-regular fa-paper-plane text-2xl text-white bg-blue-500 px-3 py-2 rounded-full"
          onClick={sendMessage}
        >
      
        </button>
      </div>
      {/* End message input */}
    </div>
  );
};

export default Chat;
