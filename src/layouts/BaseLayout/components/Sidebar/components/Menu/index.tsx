import type { MenuProps } from 'antd'

import { useAppStore } from '@/store/app'

export type MenuItem = Required<MenuProps>['items'][number]

export default function Menu() {
  const { siderBg } = ATheme.useToken().token.Layout!
  const navigate = useNavigate()
  const location = useLocation()
  const appStore = useAppStore()

  // 选中项
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  // 展开项
  const [openKeys, setOpenKeys] = useState<string[]>([])

  // 根据路由地址，设置菜单的选中项和展开项
  useEffect(() => {
    setSelectedKeys([location.pathname])
    setOpenKeys((value) =>
      location.pathname
        .split('/')
        .filter((i) => i)
        .reduce<string[]>((acc, cur) => {
          const key = `${acc}/${cur}`
          return [...acc, key]
        }, [])
        .concat(value),
    )
  }, [location.pathname])

  // 点击菜单项，跳转到对应的路由
  const handleClickMenuItem = (menuInfo: MenuItem) => {
    if (menuInfo?.key && typeof menuInfo.key === 'string') {
      navigate(menuInfo.key)
    }
  }

  return (
    <AMenu
      style={{ backgroundColor: siderBg }}
      items={appStore.menus}
      selectedKeys={selectedKeys}
      openKeys={openKeys}
      onOpenChange={setOpenKeys}
      mode="inline"
      onClick={handleClickMenuItem}
    />
  )
}
