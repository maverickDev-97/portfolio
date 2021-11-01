import { useContext } from 'react';
import { useAppTheme } from '../../hooks/useAppTheme';
import { ThemeContext } from '../../store/ThemeProvider';
import { StyledThemeToggler } from './ThemeToggler.styles';

const ThemeToggler = () => {

    const { isLight, setMode } = useAppTheme();

    return (
        <StyledThemeToggler onClick={setMode} isLight={isLight}>
            {isLight ? '🌙' : '☀️'}
        </StyledThemeToggler>
    )
}

export default ThemeToggler;