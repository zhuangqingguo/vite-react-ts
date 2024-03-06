import { useNavigation } from 'react-router-dom'
import { AppMeta, getMenus, getShowMenus } from '@/utils/appConfig'
import { useAppStore } from '@/store/app'
import { getRoutes } from '@/apis/user'
import { getRouteMetadata, routes } from '@/router'
import zhCN from 'antd/locale/zh_CN'
import { themeConfigPresets } from '@/utils/appConfig'

/**
 * 生成页面标题
 * @description
 * - 如果传参，结果为 `当前页面标题 | 应用名称`
 * - 默认为 `应用名称`
 */
const getDocumentTitle = (title?: string) => (title ? `${title} | ${AppMeta.APP_NAME}` : AppMeta.APP_NAME)

export default function App() {
  const appStore = useAppStore()
  const navigation = useNavigation()
  const location = useLocation()

  useEffect(() => {
    getRoutes().then((res) => {
      appStore.setMenus(getMenus(getShowMenus(res)))
    })
  }, [])

  // 监听路由变化，动态修改页面标题
  useEffect(() => {
    console.log(444444, location.pathname, routes)
    const { title } = getRouteMetadata(location.pathname, routes) ?? {}
    document.title = getDocumentTitle(typeof title === 'function' ? title() : title)
  }, [location.pathname])

  return (
    <AConfigProvider
      locale={zhCN}
      theme={themeConfigPresets}
    >
      <Suspense
        fallback={
          <ASpin
            size="large"
            className="global_spin"
          />
        }
      >
        <AApp>
          <Outlet />
        </AApp>
      </Suspense>
    </AConfigProvider>
  )
}
