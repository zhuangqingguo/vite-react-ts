import { createBrowserRouter } from 'react-router-dom'
import type { IndexRouteObject, NonIndexRouteObject } from 'react-router-dom'
import routes from './routes'

export interface RouteMetadata {
  title?: string | (() => string)
  hideTitle?: boolean
  icon?: any
}
interface CustomIndexRouteObject extends IndexRouteObject {
  meta?: RouteMetadata
  hideMenu?: boolean
}
interface CustomNonIndexRouteObject extends NonIndexRouteObject {
  children?: CustomRouteObject[]
  meta?: RouteMetadata
}
export type CustomRouteObject = CustomIndexRouteObject | CustomNonIndexRouteObject

//可传第二个参数，配置base路径 { basename: "/app"}
const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(routes)

// 路由元数据缓存
export const routeMetadataCacheMap = new Map<string, RouteMetadata | undefined>()

/**
 * 递归匹配获取当前路由的元数据
 * @description 先从缓存中获取，如果缓存中没有，则递归匹配，匹配到后缓存结果
 */
export function getRouteMetadata(path: string, routeList: CustomRouteObject[]): RouteMetadata | undefined {
  // 优先从缓存中获取
  if (routeMetadataCacheMap.has(path)) {
    return routeMetadataCacheMap.get(path)
  }

  // 匹配当前路由
  const route = routeList.find((r) => r.path === path)
  if (route) {
    // 缓存结果
    routeMetadataCacheMap.set(path, route.meta)
    return route.meta
  }

  // 递归匹配子路由
  // eslint-disable-next-line no-restricted-syntax
  for (const r of routeList) {
    if (r.children) {
      const meta = getRouteMetadata(path, r.children)
      if (meta) {
        // 缓存结果
        routeMetadataCacheMap.set(path, meta)
        return meta
      }
    }
  }
  // 缓存结果
  routeMetadataCacheMap.set(path, undefined)
  return undefined
}

export { routes }
export default router
