import { Content, Header, Sidebar, Tabs, Footer } from './components'

export default function BaseLayout() {
  return (
    <ALayout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <ALayout>
        <Header />
        {/* <Tabs /> */}
        <Content />
        {/* <Footer /> */}
      </ALayout>
    </ALayout>
  )
}
