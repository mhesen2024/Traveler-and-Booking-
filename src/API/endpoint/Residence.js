import axiosInstance from "../axios/api"


export const Residence =async()=>{
    return axiosInstance.get('Residence/GetAllResidenceType')
}