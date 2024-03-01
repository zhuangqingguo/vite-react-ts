import cls from './file.module.scss'

console.log(11111, cls)

const File = () => {
  const loca = useLocation()
  console.log(2222, loca)
  const { state } = loca
  return (
    <div>
      <div className={cls.section}>
        {state.id}
        <div className={cls.name}>888888</div>
        <div className="text-[cyan]">aaaa</div>
      </div>

      <div className={cls.title}>
        {state.id}
        <div className={cls.name}>888888</div>
      </div>
    </div>
  )
}

export default File
