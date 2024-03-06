import { create } from 'zustand'

interface State {
  menus: any[]
}

interface Actions {
  setMenus: (menus: any[]) => void
}

const initialState: State = {
  menus: [],
}

export const useAppStore = create<State & Actions>()((set, get) => ({
  ...initialState,

  setMenus: (menus) => set(() => ({ menus })),
}))
