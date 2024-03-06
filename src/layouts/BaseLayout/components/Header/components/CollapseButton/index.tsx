import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
export default function CollapseButton() {
  const sidebarStore = useSidebarStore()
  return (
    <ATooltip
      title={'切换侧边栏'}
      placement="bottom"
    >
      {sidebarStore.isCollapse ? (
        <MenuFoldOutlined
          className="cursor-pointer text-2xl text-[20px]"
          onClick={sidebarStore.toggleCollapse}
        />
      ) : (
        <MenuUnfoldOutlined
          className="cursor-pointer text-2xl text-[20px]"
          onClick={sidebarStore.toggleCollapse}
        />
      )}
    </ATooltip>
  )
}
