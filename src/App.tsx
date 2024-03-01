import { StyleProvider } from '@ant-design/cssinjs'
import { RouterProvider } from 'react-router-dom'
import zhCN from 'antd/locale/zh_CN'
import router from '@/router'

export default function App() {
  return (
    <>
      <AConfigProvider locale={zhCN}>
        <StyleProvider hashPriority="high">
          <AApp>
            <RouterProvider router={router} />
          </AApp>
        </StyleProvider>
      </AConfigProvider>
    </>
  )
}
