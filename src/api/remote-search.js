import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/vue-element-admin/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/vue-element-admin/transaction/list',
    method: 'get',
    params: query
  }) 
}

export function transactionList2(query) {
  return request({
    url: '/vue-element-admin/transaction/list2',
    method: 'get',
    params: query
  }) 
}
