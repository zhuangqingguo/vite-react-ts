import { getAssetsImg } from '@/utils/getAssetsImg'
import { AppMeta } from '@/utils/appConfig'

export default function Footer() {
  const APP_NAME = AppMeta.APP_NAME

  return (
    <ALayout.Footer className="z-50 flex h-10 w-full items-center justify-center space-x-2 border-y border-gray-300 !p-0 text-center text-xs shadow-sm dark:border-gray-950">
      <span>{APP_NAME}</span>
      <span>©</span>
      <AImage
        className="-mb-2 cursor-pointer pb-2 transition-all hover:-translate-y-1 hover:scale-110 active:-translate-y-0 active:scale-105 active:opacity-75"
        src={getAssetsImg('bit_ocean.png')}
        alt=""
        loading="eager"
        width={18}
        preview={false}
        draggable={false}
        onClick={() => {}}
      />
    </ALayout.Footer>
  )
}
