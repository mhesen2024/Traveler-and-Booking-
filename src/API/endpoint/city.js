import axiosInstance from "../axios/api";

export const getCity = async () => {
    return  axiosInstance.get('City');
};
