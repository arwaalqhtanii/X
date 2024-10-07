
import { useState, useEffect } from "react";
import axios from "axios";  
import { AiOutlineCalendar, AiOutlineMore, AiOutlineDelete, AiOutlineHeart, AiFillHeart, AiOutlinePicture, AiOutlineGif, AiOutlineBars, AiOutlineSmile, AiOutlineCamera, AiOutlineEnvironment } from "react-icons/ai";
import { BsPatchCheckFill } from "react-icons/bs";

const MiddleContent = () => {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState("");
  const [likes, setLikes] = useState(() => JSON.parse(localStorage.getItem("likes")) || {});
  const [showOptions, setShowOptions] = useState(null);

  const [userName, setUserName] = useState("a");
  const [userImage, setUserImage] = useState("https://pbs.twimg.com/profile_images/1817322973864361984/zkJUgLO8_400x400.jpg");
  const [isEditing, setIsEditing] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);
  const [newUserImage, setNewUserImage] = useState(userImage);

  const apiURL = "https://66e7e6bbb17821a9d9da704c.mockapi.io/home"; 

  useEffect(() => {
    axios.get(apiURL)
      .then((response) => {
        setTweets(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tweets:", error);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const handlePostTweet = () => {
    if (newTweet.trim() !== "") {
      const tweet = {
        content: newTweet,
        likes: false,
      };

      axios.post(apiURL, tweet)
        .then((response) => {
          setTweets([response.data, ...tweets]); 
          setNewTweet(""); 
        })
        .catch((error) => {
          console.error("Error posting tweet:", error);
        });
    }
  };

  const handleDeleteTweet = (id) => {
    const confirmDelete = window.confirm("هل أنت متأكد أنك تريد حذف هذه التغريدة؟");
    if (confirmDelete) {
      axios.delete(`${apiURL}/${id}`)
        .then(() => {
          setTweets(tweets.filter((tweet) => tweet.id !== id));
          setShowOptions(null); 
        })
        .catch((error) => {
          console.error("Error deleting tweet:", error);
        });
    }
  };

  const handleLike = (id) => {
    setLikes((prevLikes) => {
      const updatedLikes = { ...prevLikes, [id]: !prevLikes[id] };
      return updatedLikes;
    });
  };

  return (
    <div className="w-full bg-black text-white p-6 md:p-9">
      <div className="bg-cover bg-center h-36 md:h-48" style={{ backgroundImage: "url('https://pbs.twimg.com/profile_banners/997284258178916353/1722118697/1500x500')" }}></div>

      <div className="relative flex flex-col md:flex-row items-start md:items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
        <img
          src={userImage}
          alt="avatar"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-black"
        />
        <div className="flex-1">
          <h2 className="text-2xl font-bold flex items-center">
            {userName} <BsPatchCheckFill className="ml-2 text-blue-500" />
          </h2>
          <p className="text-sm text-gray-500">@i_ii</p>
          <p className="text-gray-400 flex items-center mt-2">
            <AiOutlineCalendar className="mr-2" /> Joined May 2018
          </p>
          <div className="mt-2 flex space-x-4">
            <span className="text-sm font-bold">104 Following</span>
            <span className="text-sm font-bold">28 Followers</span>
          </div>
        </div>
        <button 
          onClick={() => setIsEditing(true)} 
          className="border border-gray-400 text-white py-1 px-4 rounded-full"
        >
          Edit Profile
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg text-white w-96">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className="w-full bg-gray-700 text-white p-2 rounded-lg mb-4"
              placeholder="Name"
            />
            <input
              type="text"
              value={newUserImage}
              onChange={(e) => setNewUserImage(e.target.value)}
              className="w-full bg-gray-700 text-white p-2 rounded-lg mb-4"
              placeholder="Profile Image URL"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-red-500 py-2 px-4 rounded-lg mr-2"
              >
                Cancel
              </button>
              <button className="bg-blue-500 py-2 px-4 rounded-lg">Save</button>
            </div>
          </div>
        </div>
      )}

      <div className="border-b border-gray-700 mt-6">
        <ul className="flex justify-around text-gray-500 text-sm">
          <li className="py-4 text-center w-full border-b-4 border-blue-500 text-white">Posts</li>
          <li className="py-4 text-center w-full">Replies</li>
          <li className="py-4 text-center w-full">Highlights</li>
          <li className="py-4 text-center w-full">Articles</li>
          <li className="py-4 text-center w-full">Media</li>
          <li className="py-4 text-center w-full">Likes</li>
        </ul>
      </div>

      <div className="bg-gray-800 p-4 rounded-lg mb-6 mt-6">
        <textarea
          value={newTweet}
          onChange={(e) => setNewTweet(e.target.value)}
          placeholder="What’s happening?"
          className="w-full bg-black text-white p-2 rounded-lg resize-none h-24"
        />
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-4 text-blue-500">
            <AiOutlinePicture size={24} title="Insert Image" />
            <AiOutlineGif size={24} title="Insert GIF" />
            <AiOutlineBars size={24} title="Poll" />
            <AiOutlineSmile size={24} title="Emoji" />
            <AiOutlineCamera size={24} title="Camera" />
            <AiOutlineEnvironment size={24} title="Location" />
          </div>
          <button
            onClick={handlePostTweet}
            className="bg-blue-500 text-white rounded-full py-2 px-4"
          >
           نشر
          </button>
        </div>
      </div>

      <div className="p-4">
        {tweets.length === 0 ? (
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <p className="text-gray-400 text-center">No tweets yet.</p>
          </div>
        ) : (
          tweets.map((tweet) => (
            <div key={tweet.id} className="bg-gray-800 p-4 rounded-lg relative mb-4">
              <div className="flex justify-between">
                <p>{tweet.content}</p>
                <AiOutlineMore
                  size={24}
                  onClick={() => setShowOptions(showOptions === tweet.id ? null : tweet.id)}
                  className="cursor-pointer"
                />
                {showOptions === tweet.id && (
                  <div className="absolute right-0 mt-6 w-24 bg-gray-700 rounded-lg">
                    <button
                      onClick={() => handleDeleteTweet(tweet.id)}
                      className="flex items-center space-x-2 px-4 py-2 text-red-500 w-full"
                    >
                      <AiOutlineDelete /> <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>
              <div className="mt-2 flex items-center">
                {likes[tweet.id] ? (
                  <AiFillHeart
                    size={24}
                    onClick={() => handleLike(tweet.id)}
                    className="cursor-pointer text-red-500"
                  />
                ) : (
                  <AiOutlineHeart
                    size={24}
                    onClick={() => handleLike(tweet.id)}
                    className="cursor-pointer text-gray-400"
                  />
                )}
                <span className="ml-2">{likes[tweet.id] ? 1 : 0}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MiddleContent;
