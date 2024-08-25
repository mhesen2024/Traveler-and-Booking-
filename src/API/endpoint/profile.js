import axiosInstance from "../axios/api";

export const getProfile = async () => {
    const token = localStorage.getItem("token")|| '';
        return response = await axiosInstance.get('User/Profile', {
        Headers: {
            'Authorization': `Bearer ${token}`,
        }
    });
}