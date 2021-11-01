import { useContext } from 'react'
import { ThemeContext } from '../store/ThemeProvider'

export const useAppTheme = () => {

    const { mode, setMode } = useContext(ThemeContext);
    const isLight = mode === 'light';

    return {
        isLight,
        setMode
    }
}