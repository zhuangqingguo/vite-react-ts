import cls from './index.module.scss'

console.log(11111, cls)

const File = () => {
  const loca = useLocation()
  console.log(2222, loca)
  return (
    <div>
      <div className={cls.section}>
        <div className={cls.name}>888888</div>
        <div className="text-[cyan]">aaaa</div>
      </div>

      <div className={cls.title}>
        <div className={cls.name}>888888</div>
      </div>
    </div>
  )
}

export default File
