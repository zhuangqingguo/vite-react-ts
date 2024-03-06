import { useRequest } from 'ahooks'
import { Button } from 'antd'

import { getAssetsImg } from '@/utils/getAssetsImg'

import { getList } from '@/apis/user'

const Login = () => {
  useRequest(getList, {
    defaultParams: [{ id: 2 }],
  })

  return (
    <div>
      登录页
      <Button type="primary">Button</Button>
      <img src={getAssetsImg('home.png')} />
    </div>
  )
}

export default Login
