import { useState, createContext, ReactElement, FC } from 'react';

export interface IThemeContext {
    mode?: any;
    setMode?: any;
}

export interface ThemeProviderProps {
    children: ReactElement
}

export const ThemeContext = createContext<IThemeContext>({})

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {

    const [mode, setMode] = useState('dark')

    return (
        <ThemeContext.Provider value={{
            mode,
            setMode: () => setMode(mode === 'light' ? 'dark' : 'light')
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;