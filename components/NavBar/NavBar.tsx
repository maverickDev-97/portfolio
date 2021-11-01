import ThemeToggler from '../ThemeToggler/ThemeToggler';
import { StyledNavBar } from './NavBar.styles';

const NavBar = () => {
    return (
        <StyledNavBar>
            <ThemeToggler />
        </StyledNavBar>
    )
}

export default NavBar;
