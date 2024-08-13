import React, { useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { FaTrash, FaEdit, FaEye, FaEyeSlash, FaCamera } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const instaUrl = "https://www.instagram.com/";
const twitterUrl = "https://www.twitter.com/";
const linkedinurl = "https://www.linkedin.com";
const youtubeurl = "https://www.youtube.com/";

const ProfileCard = () => {
  const [links, setLinks] = useState([]);
  const [newLinkName, setNewLinkName] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(
    "https://via.placeholder.com/100"
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  

  const toggleLink = (index) => {
    setLinks(
      links.map((link, i) =>
        i === index ? { ...link, enabled: !link.enabled } : link
      )
    );
  };

  const addOrUpdateLink = async () => {
    if (newLinkName.trim() && newLinkUrl.trim()) {
      if (editingIndex !== null) {
        // Update existing link
        const updatedLinks = links.map((link, i) =>
          i === editingIndex
            ? { name: newLinkName, url: newLinkUrl, enabled: link.enabled }
            : link
        );
        setLinks(updatedLinks);
        setEditingIndex(null);

        // Make an API request to update the link in the database
        try {
          await axios.put(`your-api-endpoint/${links[editingIndex].id}`, {
            name: newLinkName,
            url: newLinkUrl,
            enabled: links[editingIndex].enabled,
          });
        } catch (error) {
          console.error("Error updating link:", error);
        }
      } else {
        // Add new link
        const newLink = { name: newLinkName, url: newLinkUrl, enabled: false };
        try {
          const response = await axios.post(`${backendurl}/api/users/register/id?`, 
            newLink);
          setLinks([...links, response.data]);
        } catch (error) {
          console.error("Error adding link:", error);
        }
      }
      setNewLinkName("");
      setNewLinkUrl("");
    }
  };

  const editLink = (index) => {
    setEditingIndex(index);
    setNewLinkName(links[index].name);
    setNewLinkUrl(links[index].url);
  };

  const deleteLink = async (index) => {
    try {
      // Make an API request to delete the link from the database
      await axios.delete(`your-api-endpoint/${links[index].id}`);
      setLinks(links.filter((_, i) => i !== index));
    } catch (error) {
      console.error("Error deleting link:", error);
    }
  };

  const matchUrl = (s, socialMethod) => {
    let i = 0,
      j = 0;
    let socialMediaUrl = "";
    if (socialMethod === "insta") {
      socialMediaUrl = instaUrl;
    } else if (socialMethod === "twitter") {
      socialMediaUrl = twitterUrl;
    } else if (socialMethod === "linkedin") {
      socialMediaUrl = linkedinurl;
    } else if (socialMethod === "youtube") {
      socialMediaUrl = youtubeurl;
    }
    while (i < s.length && j < socialMediaUrl.length) {
      if (s[i] !== socialMediaUrl[j]) return false;
      i++;
      j++;
    }
    return true;
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="my-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto bg-white p-6 rounded-lg shadow-2xl">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            className="w-24 h-24 rounded-full mb-4 cursor-pointer"
            src={profilePhoto}
            alt="Profile"
            onClick={openModal}
          />
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*"
            onChange={handlePhotoChange}
            id="profile-photo-input"
          />
          <label
            htmlFor="profile-photo-input"
            className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg cursor-pointer"
          >
            <FaCamera className="text-gray-700" size={24} />
          </label>
        </div>
        {links && links.length ? (
          <div className="flex space-x-3 text-gray-500 mt-4">
            {links.filter((item) => matchUrl(item.url, "insta")).length ? (
              <FaInstagram />
            ) : (
              <></>
            )}
            {links.filter((item) => matchUrl(item.url, "twitter")).length ? (
              <FaTwitter />
            ) : (
              <></>
            )}
            {links.filter((item) => matchUrl(item.url, "linkedin")).length ? (
              <FaLinkedin />
            ) : (
              <></>
            )}
            {links.filter((item) => matchUrl(item.url, "youtube")).length ? (
              <IoLogoYoutube />
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>

      <button className="bg-purple-600 text-white py-2 px-6 rounded-full mt-6 w-full">
        FanConnect
      </button>

      <div className="mt-4">
        <input
          type="text"
          className="w-full p-2 mb-2 border rounded-lg"
          placeholder="Link Name"
          value={newLinkName}
          onChange={(e) => setNewLinkName(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 mb-2 border rounded-lg"
          placeholder="Link URL"
          value={newLinkUrl}
          onChange={(e) => setNewLinkUrl(e.target.value)}
        />
        <button
          className="bg-purple-600 text-white py-2 px-6 rounded-full w-full"
          onClick={addOrUpdateLink}
        >
          {editingIndex !== null ? "Update Link" : "+ Add link"}
        </button>
      </div>

      <ul className="mt-6 space-y-4">
        {links.map((link, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
          >
            <div className="w-full">
              <h3 className="font-bold">{link.name}</h3>
              <p className="text-gray-500 truncate">
                {link.url || "URL not provided"}
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                className="text-gray-500 hover:text-purple-600"
                onClick={() => editLink(index)}
              >
                <FaEdit />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => deleteLink(index)}
              >
                <FaTrash />
              </button>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={link.enabled}
                  onChange={() => toggleLink(index)}
                />
                {link.enabled ? (
                  <FaEye className="ml-2 text-purple-600" />
                ) : (
                  <FaEyeSlash className="ml-2 text-gray-500" />
                )}
              </label>
              <button>
                <CiStar />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover :text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              className="w-64 h-64 object-cover rounded-lg"
              src={profilePhoto}
              alt="Profile Large"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;

