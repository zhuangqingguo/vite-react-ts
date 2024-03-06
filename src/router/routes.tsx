import { lazy } from 'react'
import { SmileTwoTone } from '@ant-design/icons'
import type { CustomRouteObject } from './index'
import App from '@/App'

const modules: any = import.meta.glob('@/pages/**/*.tsx')

const lazyLoad = (moduleName: string) => {
  const Module = lazy(modules[`/src/pages/${moduleName}/index.tsx`])
  return <Module />
}

const BaseLayout = lazy(() => import('@/layouts/BaseLayout'))

const routes: CustomRouteObject[] = [
  {
    path: '',
    Component: App,
    children: [
      {
        path: '/login',
        element: lazyLoad('login'),
        meta: { title: '登录', icon: <SmileTwoTone /> },
      },

      {
        path: '',
        element: <BaseLayout />,
        meta: { icon: <SmileTwoTone /> },
        children: [
          {
            path: '/',
            element: lazyLoad('home'),
            meta: { title: '首页', icon: <SmileTwoTone /> },
          },
          {
            path: '/manage',
            meta: { title: '管理', icon: <SmileTwoTone /> },
            children: [
              {
                path: '/manage/manage1',
                element: lazyLoad('manage/manage1'),
                meta: { title: '管理1', icon: <SmileTwoTone /> },
              },
              {
                path: '/manage/manage2',
                element: lazyLoad('manage/manage2'),
                meta: { title: '管理2', icon: <SmileTwoTone /> },
              },
              {
                path: '/manage/info',
                element: lazyLoad('manage/info'),
                meta: { title: 'Info', icon: <SmileTwoTone /> },
              },
            ],
          },
          {
            path: '/table-page',
            element: lazyLoad('table-page'),
            meta: { title: '列表页', icon: <SmileTwoTone /> },
          },

          {
            path: '/403',
            Component: lazy(() => import('@/pages/error-pages/403')),
            hideMenu: true,
          },
          {
            path: '/404',
            Component: lazy(() => import('@/pages/error-pages/404')),
            hideMenu: true,
          },
          {
            path: '/500',
            Component: lazy(() => import('@/pages/error-pages/500')),
            hideMenu: true,
          },
          {
            path: '*',
            Component: lazy(() => import('@/pages/error-pages/404')),
            hideMenu: true,
          },
        ],
      },
      {
        path: '/file',
        element: lazyLoad('file'),
        meta: { title: 'File', icon: <SmileTwoTone /> },
      },
    ],
  },
]

export default routes
