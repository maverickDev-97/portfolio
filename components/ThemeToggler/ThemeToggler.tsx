import { useAppTheme } from '../../hooks/useAppTheme';
import { StyledThemeToggler } from './ThemeToggler.styles';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const ThemeToggler = () => {

    const { isLight, setMode } = useAppTheme();

    return (
        <StyledThemeToggler onClick={setMode} isLight={isLight}>
            {/* {isLight ? '🌙' : '☀️'} */}
            {isLight ? <BsFillMoonFill /> : <BsFillSunFill />}
        </StyledThemeToggler>
    )
}

export default ThemeToggler;