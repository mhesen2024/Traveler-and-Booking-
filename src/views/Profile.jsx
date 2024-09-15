import React, { useEffect, useState } from "react";
import Logo from "../components/atoms/Logo";
import { useNavigate } from "react-router";
import profilePic from "../asserts/PNG/profile.png";
import { Link } from "react-router-dom";
import { getProfile, updateProfile } from "../API/endpoint/profile";
import toast, { Toaster } from "react-hot-toast";

export default function Profile() {
  const dataUser = JSON.parse(localStorage.getItem("user")) || {};
  const [firstName, setFirstName] = useState(dataUser.firstName );
  const [lastName, setLastName] = useState(dataUser.lastName );
  const [email, setEmail] = useState(dataUser.email );
  const [phoneNumber, setPhoneNumber] = useState(dataUser.phoneNumber || "123-456-7890");
  const [imgProf, setImgProf] = useState(dataUser.imageUrl || profilePic);
  const [toggle , setToggle]= useState(false);
  const [image, setImage] = useState();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await getProfile();
      const data = response.data.data;
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.error("Failed to fetch user profile:", error);
    }
  };

  const updateData = async () => {
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(image);
    console.log(phoneNumber);
    
    const formData = new FormData();
    formData.append('FirstName', firstName);
    formData.append('LastName', lastName);
    formData.append('Email', email);
    formData.append('Image', image);
    formData.append('PhoneNumber', phoneNumber);
    try {
      const response = await updateProfile(formData);      
      if (response.status === 200) {
        toast.success('Profile updated successfully');
        setTimeout(() => {
          window.location.reload();
        }, 100);
        getUser();
      } else {
        toast.error('Failed to update profile');
      }
    } catch (error) {
      toast.error('An error occurred while updating the profile');
    }
  };
  

  useEffect(() => {
    if (!dataUser.email) {
      navigate("/");
    }
    getUser();
  });



  return (
    <div className="bg-gray-900 p-8 text-white rounded-lg mt-[100px] shadow-lg mx-auto max-w-full lg:max-w-5xl">
      <div className="flex flex-col md:flex-row items-center">
        <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] xl:w-[250px] xl:h-[250px] xl:mx-16 mb-4 md:mb-0 md:mr-8">
          <img
            src={imgProf}
            alt="Profile"
            className="w-full h-full object-cover"
          />
       <label htmlFor="profile-picture-upload" className="absolute -right-3 -bottom-3  w-[50px] h-[50px] group rounded-full bg-white text-center hover:bg-blue-500 cursor-pointer">
       <i class="fa-solid fa-camera-retro leading-[50px] text-black group-hover:text-white"></i>
       </label>
        </div>
        <div className="text-center md:text-left flex-1">
          <h2 className="capitalize text-2xl md:text-3xl font-bold text-blue-500">
            {firstName} {lastName}
          </h2>
          <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start mt-3">
            <i className="fa-solid fa-envelope mr-2 text-blue-500"></i>
            {email}
          </p>
          <p className="text-sm text-gray-400 flex items-center justify-center md:justify-start mt-2">
            <i className="fa-solid fa-phone mr-2 text-blue-500"></i>
            {phoneNumber}
          </p>
        </div>
      </div>
      <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:justify-between">
        <Link to="/" className="inline-block xl:mx-16 mb-4 md:mb-0">
          <Logo />
        </Link>
        <div>
          <p
            onClick={()=>{updateData()}}
            className={`${toggle ? 'block':'hidden'} cursor-pointer text-blue-400 hover:text-blue-600 flex items-center justify-center md:justify-start transition duration-300`}
          >
            <i className="fa-solid fa-upload mr-2"></i> Upload Picture
          </p>
          <input
            id="profile-picture-upload"
            type="file"
            onChange={(event) => {
              setImage(event.currentTarget.files[0]);    
              setToggle(true);    
            }}
            className="hidden"
            />

        </div>
      </div>
      <Toaster />
    </div>
  );
}
