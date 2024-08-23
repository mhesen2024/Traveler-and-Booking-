import axios from "axios";
import axiosInstance from "../axios/api";

export const getCity = async () => {
    return  axiosInstance.get('City');
};

export const addCity = async (body) => {
    try {
      const response = axiosInstance.post('City/Create', body);
      return response;
    } catch (error) {
      console.error('Error adding country:', error);
      throw error;
    }
  };