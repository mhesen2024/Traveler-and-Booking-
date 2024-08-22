import axiosInstance from "../axios/api";

export const getCountry = async () => {
    return  axiosInstance.get('Country');
};

export const addCountry = async(body)=>{
    return axiosInstance.post('Country/Create',body)
}