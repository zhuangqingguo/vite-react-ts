import { produce } from 'immer'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface UserInfo {
  name: string
  age: number
  id: number
}

export interface UserState {
  userInfo: UserInfo
  count: number
  token: string
  addCount: (params: number) => void
  updateUserInfo: (params: UserInfo) => void
  updateAge: (params: number) => void
  updateToken: (params: string) => void
}

// 创建状态存储
const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      userInfo: {
        name: 'zhangsan',
        age: 23,
        id: 111,
      },
      count: 1,
      token: 'S1',
      addCount: (count) => set({ count }),
      //更新整个对象
      updateUserInfo: (userInfo) => set({ userInfo }), //合并userInfo
      //更新对象中某个属性
      updateAge: (age) =>
        set(
          produce((state) => {
            state.userInfo.age = age
          }),
        ),
      hasData: () => !!get().userInfo.id,

      //更新原始数据类型
      updateToken: (token) => set({ token }),
    }),
    { name: 'user', storage: createJSONStorage(() => localStorage) },
  ),
)

export default useUserStore
