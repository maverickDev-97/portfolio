import Link from 'next/link'
import { useAppTheme } from '../../hooks/useAppTheme';
import { StyledLogo } from './Logo.styles';

const Logo = () => {

    const { isLight } = useAppTheme();

    return (
        <Link href='/'>
            <StyledLogo isLight={isLight} />
        </Link>
    )
}

export default Logo;