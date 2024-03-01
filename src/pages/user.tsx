import useUserStore, { UserState } from '@/store/user'

const User = () => {
  const navigation = useNavigate()

  const [userInfo, token, count, addCount] = useUserStore((state: UserState) => [
    state.userInfo,
    state.token,
    state.count,
    state.addCount,
  ])

  return (
    <div>
      {/* 报错：因为取不到c属性 */}
      {/* {obj.b.c} */}
      user
      <AButton
        type="primary"
        onClick={() => navigation('/manage')}
      >
        manage
      </AButton>
      <div>{token}</div>
      <div>{userInfo.name}</div>
      <AButton onClick={() => addCount(count + 1)}>增加</AButton>
      <div>{count}</div>
    </div>
  )
}

export default User
