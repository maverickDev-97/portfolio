import Styled from 'styled-components';

export const StyledFooter = Styled.footer`
    width: 100%;
    padding-bottom: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 3;
    font-size: 20px;
    & .wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 320px) {
        margin-top: 48px;
        position: static;
    }
`