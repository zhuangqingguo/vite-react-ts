import HttpClient from '../utils/axios'

import type { ListParams, ListModel } from './model/userModel'

export const getList = (params: ListParams) => {
  return HttpClient.get<ListModel>('/list', { params })
}

export const getRoutes = () => {
  return Promise.resolve().then(() => {
    return [
      {
        path: '/',
        meta: {
          title: '首页',
        },
      },
      {
        path: '/manage',
        meta: {
          title: '管理',
        },
        children: [
          {
            path: '/manage/manage1',

            meta: {
              title: '管理1',
            },
          },
          {
            path: '/manage/manage2',

            meta: {
              title: '管理2',
            },
          },
          {
            path: '/manage/info',

            meta: {
              title: 'Info',
            },
          },
        ],
      },
      {
        path: '/table-page',
        meta: { title: '列表页' },
      },
    ]
  })
}
