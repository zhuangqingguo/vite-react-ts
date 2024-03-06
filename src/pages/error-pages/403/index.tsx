import { FileUnknownOutlined } from '@ant-design/icons'

export default memo(() => {
  const navigate = useNavigate()

  const handleBack = () => navigate('/')

  return (
    <div className="flex h-full items-center justify-center">
      <AResult
        icon={<AIcon component={FileUnknownOutlined as React.ForwardRefExoticComponent<any>} />}
        title="403 无访问权限"
        extra={<AButton onClick={handleBack}>返回</AButton>}
      />
    </div>
  )
})
