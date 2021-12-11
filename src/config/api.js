import axiosClient from './axiosClient';


const apiCalls = {
    gettours: () => {
        return axiosClient.get(`tours`);
    },
    getexplore: () => {
        return axiosClient.get(`explore`);
    },
    getcities: () => {
        return axiosClient.get(`cities`);
    },
    gethotels: () => {
        return axiosClient.get(`hotels`);
    },
    gethotelsid: (id) => {
        return axiosClient.get(`hotels/${id}`);
    },
    
}

export default apiCalls;