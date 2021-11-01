import { StyledFooter } from './Footer.styles';
import FooterMail from './FooterMail/FooterMail';
import FooterSocial from './FooterSocial/FooterSocial';

const Footer = () => {
    return (
        <StyledFooter >
            <div className='container'>
                <div className='wrapper'>
                    <FooterSocial />
                    <FooterMail />
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer;