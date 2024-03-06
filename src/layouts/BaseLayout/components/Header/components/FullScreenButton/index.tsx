import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons'

export default function FullScreenButton() {
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body)

  return (
    <ATooltip
      title={'全屏'}
      placement="bottom"
    >
      {isFullscreen ? (
        <FullscreenOutlined
          className="cursor-pointer text-2xl text-[20px]"
          onClick={toggleFullscreen}
        />
      ) : (
        <FullscreenExitOutlined
          className="cursor-pointer text-2xl text-[20px]"
          onClick={toggleFullscreen}
        />
      )}
    </ATooltip>
  )
}
