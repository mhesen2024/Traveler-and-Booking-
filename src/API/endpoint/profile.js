import axiosInstance from "../axios/api";

const token = localStorage.getItem("token");

export const getProfile = async () => {
    if (!token) {
        throw new Error("Token is not available");
    }

    return axiosInstance.get('User/Profile', {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    });
}