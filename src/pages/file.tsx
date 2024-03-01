import cls from './file.module.scss'

console.log(11111, cls)

const File = () => {
  const { state } = useLocation()
  return (
    <div>
      <div className={cls.section}>
        {state.id}
        <div className={cls.name}>888888</div>
      </div>

      <div className={cls.title}>
        {state.id}
        <div className={cls.name}>888888</div>
      </div>
    </div>
  )
}

export default File
