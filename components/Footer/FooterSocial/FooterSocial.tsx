import { FC } from 'react';
import Link from 'next/link'
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa'
import { StyledFooterSocial } from './FooterSocial.styles';
import { useAppTheme } from '../../../hooks/useAppTheme';

const FooterSocial: FC = () => {

    const { isLight } = useAppTheme();

    return (
        <div>
            <StyledFooterSocial href='https://www.linkedin.com/in/dmytropryshliak/' target='_blank' isLight={isLight}>
                <FaLinkedinIn />
            </StyledFooterSocial>
            <StyledFooterSocial href='https://www.t.me/dmytro_pryshliak' target='_blank' isLight={isLight}>
                <FaTelegramPlane />
            </StyledFooterSocial>
        </div>
    )
}

export default FooterSocial;