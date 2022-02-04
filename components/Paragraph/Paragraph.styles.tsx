import Styled from 'styled-components';

export const StyledParagraph = Styled.p`
    margin-bottom: 16px;
    font-size: 20px;
    opacity: 0;

    animation-name: paragraph-fading;
    animation-duration: 750ms;
    animation-fill-mode: forwards;

    @keyframes paragraph-fading {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`