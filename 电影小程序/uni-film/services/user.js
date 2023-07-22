import { request } from '../utils/http'

const getUser = openId => request({ url: '/user/get', data: { openId } })

/**
 * 跟新用户信息
 * @params: object
 * returns: 0成功 1受影响的条数
 */
const updateUser = user => request({ url: '/user/update', method: 'post', data: user })

export { getUser, updateUser }
