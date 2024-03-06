import useUserStore from '@/store/user'

enum UserAction {
  'USER.INFO' = '1',
  'CHANGE.PASSWORD' = '2',
  'QUIT' = '3',
}

export default function UserAvatar() {
  const { message } = AApp.useApp()
  const userStore = useUserStore()
  const navigate = useNavigate()

  // const logoutMutation = useMutation({
  //   mutationFn: () => AuthAPI.logout(),
  //   onSuccess: () => {
  //     userStore.clearUser()
  //     AuthUtils.clearAccessToken()
  //     AuthUtils.clearRefreshToken()
  //     navigate('/login', { replace: true })
  //     message.success('退出登录成功')
  //   },
  // })

  const menuItems = [
    {
      key: UserAction['USER.INFO'],
      label: '用户信息',
    },
    {
      key: UserAction['CHANGE.PASSWORD'],
      label: '修改密码',
    },
    {
      key: UserAction.QUIT,
      label: '退出登录',
    },
  ]

  // 点击菜单
  const handleClickMenu = ({ key }: { key: string }) => {
    switch (key) {
      case UserAction['USER.INFO']:
        navigate('/user-info')
        break
      case UserAction['CHANGE.PASSWORD']:
        navigate('/change-password')
        break
      case UserAction.QUIT:
        logoutMutation.mutate()
        break
      default:
        break
    }
  }

  if (!userStore.hasData()) {
    return null
  }

  return (
    <ADropdown
      menu={{
        items: menuItems,
        onClick: handleClickMenu,
      }}
    >
      {userStore.user.avatarUrl ? (
        <AAvatar
          src={userStore.user.avatarUrl}
          size={22}
          className="cursor-pointer !bg-gray-300 hover:shadow"
        />
      ) : (
        <UserOutlined className="cursor-pointer text-[22px]" />
      )}
    </ADropdown>
  )
}
