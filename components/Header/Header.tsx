import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import { StyledHeader } from './Header.styles';

const Header = () => {
    return (
        <StyledHeader>
            <div className="container">
                <div className='wrapper'>
                    <Logo />
                    <NavBar />
                </div>
            </div>
        </StyledHeader>
    )
}

export default Header;