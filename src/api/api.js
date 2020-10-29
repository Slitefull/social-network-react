import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': '43a4352a-ac35-4e73-aea3-00402b4e913e'}
})

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => instance.get(`users/?page=${currentPage}&count=${pageSize}`),
  followUser: id => instance.post(`follow/${id}`),
  unFollowUser: id => instance.delete(`follow/${id}`)
}

export const profileAPI = {
  getProfileData: userId => instance.get(`profile/${userId}`),
  getStatus: userId => instance.get(`profile/status/${userId}`),
  updateStatus: status => instance.put(`profile/status`, {status: status})
}

export const authAPI = {
  me: () => instance.get(`auth/me`),
  login: (email, password, rememberMe = false) => instance.post(`auth/login`, {email, password, rememberMe}),
  logout: () => instance.delete(`auth/login`)
}
