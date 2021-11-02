import { useAppTheme } from '../../hooks/useAppTheme';
import { StyledThemeToggler } from './ThemeToggler.styles';
import { ImContrast } from 'react-icons/im';
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggler = () => {

    const { isLight, setMode } = useAppTheme();

    return (
        <StyledThemeToggler onClick={setMode} isLight={isLight}>
            {/* {isLight ? '🌙' : '☀️'} */}
            {/* {isLight ? <FiMoon /> : <FiSun />} */}
            <ImContrast />
        </StyledThemeToggler>
    )
}

export default ThemeToggler;