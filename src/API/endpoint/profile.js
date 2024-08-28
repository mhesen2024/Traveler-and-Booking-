import axiosInstance from "../axios/api";

const userName = localStorage.getItem("userName") || '';
export const getProfile = async () => {
    const response =await  axiosInstance.get(`User/Profile/${userName}`);    
    return response;
};

export const updateProfile =async (body)=>{
    const response = await axiosInstance.put(`User/Profile/${userName}`,body );
    return response ;
}