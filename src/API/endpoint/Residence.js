import axiosInstance from "../axios/api"


export const ResidenceType =async()=>{
    return axiosInstance.get('Residence/GetAllResidenceType')
}