import { useNavigate } from 'react-router-dom'

const User = () => {
  const navigation = useNavigate()
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
    </div>
  )
}

export default User
