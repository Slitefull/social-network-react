import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {'API-KEY': '001f133c-a33c-4bc6-a6c1-6d98ee6130b8'}
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
