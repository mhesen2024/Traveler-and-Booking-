import axiosInstance from "../axios/api"


export const ResidenceType =async()=>{
    return axiosInstance.get('Residence/GetAllResidenceType')
}

export const addResidence = async (body) => {
    return await axiosInstance.post('Residence/Create', body, {
        timeout: 20000,   
    });
  };