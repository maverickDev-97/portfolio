import Styled from 'styled-components';

export const StyledParagraph = Styled.p`
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