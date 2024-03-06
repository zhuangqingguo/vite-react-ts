import { getAssetsImg } from '@/utils/getAssetsImg'
import { AppMeta } from '@/utils/appConfig'

export default function Header() {
  const APP_NAME = AppMeta.APP_NAME

  const navigate = useNavigate()
  const sidebarStore = useSidebarStore()
  return (
    <div
      className="flex h-14 w-full items-center justify-center"
      onClick={() => navigate('/')}
    >
      <AImage
        className="cursor-pointer"
        src={getAssetsImg('favicon.png')}
        alt=""
        width={36}
        loading="eager"
        preview={false}
        draggable={false}
      />
      <span
        className={`cursor-pointer whitespace-nowrap text-sm tracking-wide transition-[margin,width] ${
          sidebarStore.isDisplay ? (sidebarStore.isCollapse ? 'ml-0 hidden' : 'ml-1 w-auto') : 'hidden'
        }`}
        // className={clsx([
        //   'cursor-pointer whitespace-nowrap text-sm tracking-wide transition-[margin,width]',
        //   // eslint-disable-next-line no-nested-ternary
        //   sidebarStore.isDisplay
        //     ? sidebarStore.isCollapse
        //       ? 'ml-0 hidden'
        //       : 'ml-1 w-auto'
        //     : 'hidden'
        // ])}
      >
        {APP_NAME}
      </span>
    </div>
  )
}
