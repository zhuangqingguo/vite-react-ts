import './index.css'
import { isExternal } from '@/utils/validate'

interface Props {
  name: string
  className?: string
}

const SvgIcon = ({ name, className }: Props) => {
  const isExternalIcon = isExternal(name)
  const iconName = `#icon-${name}`
  const svgClass = className ? 'svg-icon ' + className : 'svg-icon'
  const styleExternalIcon = {
    mask: `url(${name}) no-repeat 50% 50%`,
    '-webkit-mask': `url(${name}) no-repeat 50% 50%`,
  }

  return isExternalIcon ? (
    <div
      style={styleExternalIcon}
      className="svg-external-icon svg-icon"
    ></div>
  ) : (
    <svg
      className={svgClass}
      aria-hidden="true"
    >
      <use xlinkHref={`${iconName}`}></use>
    </svg>
  )
}
export default SvgIcon
