import Icon, { FileUnknownOutlined } from '@ant-design/icons'

const DpErrorPage = memo(() => {
  const navigate = useNavigate()

  const handleBack = () => navigate('/')

  return (
    <div className="flex h-full items-center justify-center">
      <AResult
        icon={<AIcon component={FileUnknownOutlined as React.ForwardRefExoticComponent<any>} />}
        title="404 页面未找到"
        extra={<AButton onClick={handleBack}>返回</AButton>}
      />
    </div>
  )
})
export default DpErrorPage
