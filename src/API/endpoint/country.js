import axiosInstance from "../axios/api";

export const getCountry = async () => {
    return  axiosInstance.get('Country');
};
