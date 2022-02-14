import Styled from 'styled-components';

export const StyledSubParagraph = Styled.p`
    max-width: 770px;
    margin-bottom: 16px;
    font-size: 20px;

    animation-name: subparagraph-fading;
    animation-duration: 750ms;
    animation-fill-mode: forwards;

    @keyframes subparagraph-fading {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 0.3;
        }
    }
`