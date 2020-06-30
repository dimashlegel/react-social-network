import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "d2a1ada9-5724-480a-a3e9-feac2410c0d6"
	},
});

const usersApi = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
			return response.data;
		})
	},

	getProfile(userId) {
		return instance.get(`profile/${userId}`).then(response => {
			return response.data;
		})
	},

	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then(response => {
			return response.data;
		})
	},

	follow(userId) {
		return instance.post(`follow/${userId}`).then(response => {
			return response.data;
		})
	}

}

export default usersApi;