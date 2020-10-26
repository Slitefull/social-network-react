import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': 'f0ac8489-13c1-4044-aa32-c78b621689d1'}
})

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => instance.get(`users/?page=${currentPage}&count=${pageSize}`),
  followUser: id => instance.post(`follow/${id}`),
  unFollowUser: id => instance.delete(`follow/${id}`)
}

export const profileAPI = {
  getProfileData: userId => instance.get(`profile/${userId}`),
  getStatus: userId => instance.get(`profile/status/${userId}`),
  updateStatus: status => instance.put(`profile/status`, { status: status })
}

export const authAPI = {
  me: () => instance.get(`auth/me`)
}
