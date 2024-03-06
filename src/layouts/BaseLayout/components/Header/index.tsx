import { FullScreenButton, CollapseButton, UserAvatar } from './components'

export default function Header() {
  return (
    <ALayout.Header
      className="z-50 flex items-center justify-between !p-2 sm:!p-4 bg-[pink]"
      style={{
        padding: '0 15px',
        height: '56px',
      }}
    >
      <div className="flex items-center justify-start !space-x-4">
        <CollapseButton />
      </div>

      <div className="flex items-center justify-start !space-x-4">
        <FullScreenButton />
        <UserAvatar />
      </div>
    </ALayout.Header>
  )
}
