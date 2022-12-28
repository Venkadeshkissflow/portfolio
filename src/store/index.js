import create from 'zustand';

export const themeStore = create((set)=>({
    theme: "dark",
    setTheme: (theme)=>set((state)=>({
        theme: theme
    }))
}))
