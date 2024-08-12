import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaEye, FaEyeSlash, FaCamera } from "react-icons/fa";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const instaUrl = "https://www.instagram.com/";
const twitterUrl = "https://www.twitter.com/";
const linkedinurl = "https://www.linkedin.com";
const youtubeurl =  "https://www.youtube.com/";

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
    const file = event.target.files[0];//Extracts the first file selected by the user from the file input event.
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // This line actually triggers the file reading process. readAsDataURL(file) tells the FileReader to read the contents of the file as a data URL.
// Once the file is read, the onloadend event will fire, and the data URL will be passed to setProfilePhoto, updating the profile photo state in your component.

  // useEffect(() => {
  //   console.log(
  //     links.filter((item) => {
  //       if (regex.test(item)) {
  //         return true;
  //       }
  //       return false;
  //     })
  //   );
  // }, [links]);

  const toggleLink = (index) => {
    setLinks(
      links.map((link, i) =>
        i === index ? { ...link, enabled: !link.enabled } : link
      )  
    );
  };

  /* If i === index, it creates a new object { ...link, enabled: !link.enabled }:
{ ...link } spreads the properties of the current link object into a new object.
enabled: !link.enabled toggles the enabled property of the link (true becomes false and vice versa). */

  const addOrUpdateLink = () => {
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
      } else {
        // Add new link
        setLinks([
          ...links,
          { name: newLinkName, url: newLinkUrl, enabled: false },
        ]);
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

  const deleteLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  /* filter is a JavaScript array method that creates a new array containing only the elements that pass a given test.
In this case, the test is defined by the arrow function (_, i) => i !== index.
(_, i) represents the parameters passed to the filter function: the first parameter (_) represents the current element (the link object), and the second parameter (i) represents the index of that element in the array.
The _ is used as a placeholder because the link object itself isn't needed for this operation—only the index i is important. */

  const matchUrl = (s, socialMethod) => {
    let i = 0,
      j = 0;
    let socialMediaUrl = "";
    if (socialMethod == "insta") {
      socialMediaUrl = instaUrl;
    }else if(socialMethod === "twitter"){
      socialMediaUrl = twitterUrl;
    }
    else if(socialMethod === "linkedin"){
      socialMediaUrl = linkedinurl;
    }
    else if(socialMethod === "youtube"){
      socialMediaUrl = youtubeurl;
    }
    while (i < s.length && j < socialMediaUrl.length) {
      if (s[i] != socialMediaUrl[j]) return false;
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
            {links.filter((item) => {
              return matchUrl(item.url, "insta");
            }).length ? (
              <FaInstagram />
            ) : (
              <></>
            )}
            {links.filter((item) => {
              return matchUrl(item.url, "twitter");
            }).length ? (
              <FaTwitter />
            ) : (
              <></>
            )}

          {links.filter((item) => {
              return matchUrl(item.url, "linkedin");
            }).length ? (
              <FaLinkedin />
            ) : (
              <></>
            )}

           {links.filter((item) => {
              return matchUrl(item.url, "youtube");
            }).length ? (
              <IoLogoYoutube />
            ) : (
              <></>
            )}
            {/* {links.filter((item) => {
              if (item.toString().match("https://www.twitter.com/")) {
                return true;
              }
              return false;
            }) ? (
              <FaTwitter />
            ) : (
              <></>
            )} */}
            {/* {
               ?
              <FaInstagram /> : <></>
            } */}
            {/* <FaTwitter />
            <IoLogoYoutube />
            <FaFacebookF /> */}
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
            <div>
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
                <CiStar/>
              </button>
            </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for Viewing Profile Photo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
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
