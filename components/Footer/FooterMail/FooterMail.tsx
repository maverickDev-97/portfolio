import { FC, useState } from 'react';
import { StyledFooterMail } from './FooterMail.styles';
import { FaRegCopy } from 'react-icons/fa'

const FooterMail: FC = () => {

    let [mailCopy, setMailCopy] = useState(false);

    const copyMail = () => {
        let text = 'dmitriy.pryshliak@gmail.com';
        navigator.clipboard.writeText(text)
            .then(() => {
                setMailCopy(true);
                setTimeout(() => {
                    setMailCopy(false);
                }, 2000)
            })
            .catch(e => console.log(e));
    }

    return (
        <StyledFooterMail>
            <a href='mailto:dmitriy.pryshliak@gmail.com'>
                dmitriy.pryshliak@gmail.com
            </a>
            <div className='mail__icon' onClick={copyMail}>
                <FaRegCopy />
                {mailCopy && <div className='mail__tooltip'>✔️ Copied!</div>}
            </div>
        </StyledFooterMail>
    )
}

export default FooterMail;