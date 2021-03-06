import Styled from 'styled-components';

export const StyledParagraph = Styled.p`
    max-width: 770px;
    margin-bottom: 16px;
    font-size: 20px;

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