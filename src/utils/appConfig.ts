import type { ThemeConfig } from 'antd'
import type { AliasToken } from 'antd/es/theme/interface'

export const AppMeta = {
  APP_NAME: 'XXX平台',
}

// 主题：基础配置
const themeBaseToken: Partial<AliasToken> = {
  fontFamily:
    'Nunito, Noto Sans SC, Noto Color Emoji, system-ui, -apple-system, Roboto, Helvetica Neue, Arial, sans-serif',
}
// 主题：组件配置
const themeBaseComponents = {
  Card: {
    paddingLG: 16,
  },
}

// 主题预设
export const themeConfigPresets: ThemeConfig = {
  algorithm: ATheme.defaultAlgorithm,
  token: {
    ...themeBaseToken,
    colorPrimary: '#1875ff',
    colorInfo: '#1875ff',
    colorBgBase: '#ffffff',
    colorTextBase: '#000000',
  },
  components: {
    ...themeBaseComponents,
    Layout: {
      bodyBg: '#ffffff',
      footerBg: '#ffffff',
      headerBg: '#ffffff',
      siderBg: '#ffffff',
    },
  },
}

// const noViewMenus = ['*', '403', '404', '500']
//递归过滤所有隐藏的菜单  (应该是 匹配过滤 加 权限显示过滤)
export function getShowMenus(routes) {
  const menuFilter = (items) => {
    return items.filter((item) => {
      const show = !item.meta?.hideMenu && !item.hideMenu
      if (show && item.children) {
        item.children = menuFilter(item.children)
      }
      return show
    })
  }

  return menuFilter(routes)
}

// 路由处理成菜单的数据格式
export function getMenus(showRoutes) {
  function getNewArr(arr) {
    return arr.map((el) => {
      return {
        label: el?.meta?.title,
        key: el.path,
        icon: el?.meta?.icon,
        children: el.children?.length ? getNewArr(el.children) : undefined,
      }
    })
  }

  return getNewArr(showRoutes)
}
