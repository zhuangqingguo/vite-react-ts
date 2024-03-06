import Icon, { StepBackwardOutlined } from '@ant-design/icons'

export default memo(() => {
  const navigate = useNavigate()

  const handleBack = () => navigate('/')

  return (
    <div className="flex h-full items-center justify-center">
      <AResult
        icon={<AIcon component={StepBackwardOutlined as React.ForwardRefExoticComponent<any>} />}
        title="500 服务器错误"
        extra={<AButton onClick={handleBack}>返回</AButton>}
      />
    </div>
  )
})
