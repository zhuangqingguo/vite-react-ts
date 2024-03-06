import { Header, Menu } from './components'

export default function Sidebar() {
  const sidebarStore = useSidebarStore()
  return (
    <>
      <ALayout.Sider
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
        collapsible
        collapsed={sidebarStore.isCollapse}
        onCollapse={(value) => sidebarStore.setIsCollapse(value)}
        width={sidebarStore.isDisplay ? 224 : 0}
        collapsedWidth={sidebarStore.isDisplay ? 64 : 0}
        trigger={null}
      >
        <Header />
        <Menu />
      </ALayout.Sider>
    </>
  )
}
