import { FC, useContext } from 'react';
import Link from 'next/link';
import { StyledHomeLink } from './HomeLink.styles';
import { FiArrowUpRight } from 'react-icons/fi'
import { ThemeContext } from '../../store/ThemeProvider';
import { useAppTheme } from '../../hooks/useAppTheme';

export interface HomeLinkProps {
    text: string;
    url: string;
}

const HomeLink: FC<HomeLinkProps> = ({ url, text }) => {

    // const isLight = useContext(ThemeContext).mode === 'light';
    const { isLight } = useAppTheme();

    return (
        <Link href={url}>
            <StyledHomeLink isLight={isLight}>
                <span className='icon'><FiArrowUpRight /></span>
                {text}
            </StyledHomeLink>
        </Link >
    )
}

export default HomeLink;