import Styled from 'styled-components';

export const StyledFooter = Styled.footer`
    width: 100%;
    padding: 32px 0;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    font-size: 20px;
    background-color: inherit;
    opacity: 0.9;
    & .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 480px) {
        padding: 40px 0 50px;
        position: static;
    }
`