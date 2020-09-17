import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: { 'API-KEY': '001f133c-a33c-4bc6-a6c1-6d98ee6130b8' }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users/?page=${currentPage}&count=${pageSize}`).then(response => { return response.data })
  },
  followUser(id) { return instance.post(`follow/${id}`).then(response => { return response.data }) },
  unFollowUser(id) { return instance.delete(`follow/${id}`).then(response => { return response.data }) }
}

export const authAPI = { setAccount() { return instance.get(`auth/me`).then(response => { return response.data }) } }