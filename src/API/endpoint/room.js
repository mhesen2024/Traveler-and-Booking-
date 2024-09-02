import axiosInstance from "../axios/api"

export const getRoomType =async ()=>{
    return await axiosInstance.get('Room/GetAllRoomType');
}
export const getRoom =async ()=>{
    return  axiosInstance.get('Room');
}

export const addRoom =async (body)=>{
    return await axiosInstance.post('Room/Create', body, {
        timeout: 20000,   
    });
}