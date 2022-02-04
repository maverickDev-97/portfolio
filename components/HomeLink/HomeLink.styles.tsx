import Styled from 'styled-components';
import { IAppTheme } from '../../models/IAppTheme';

export const StyledHomeLink = Styled.a<IAppTheme>`
    cursor: pointer;
    position: relative;
    margin: 12px 0;
    padding: 0;
    display: flex;
    max-width: fit-content;
    align-items: center;
    font-size: 32px;
    letter-spacing: -0.02em;
    opacity: 0;
    &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        display: block;
        width: 100%;
        height: 3px;
        background: ${props => props.isLight ? "#0b132b" : "#fff"};
        transition: all .25s linear;
    }
    & .icon {
        position: relative;
        top: 5px;
        margin-right: 8px;
    }

    animation-name: link-fading;
    animation-duration: 750ms;
    animation-delay: 500ms;
    animation-fill-mode: forwards;

    @keyframes link-fading {
        0% {
            opacity: 0;
            top: 150px;
        }
        100% {
            opacity: 1;
            top: 0;
        }
    }

    @media (min-width: 992px) and (max-width: 1220px) {
        font-size: 40px;
      }
      
      @media (min-width: 768px) and (max-width: 991px) {
        font-size: 32px;
      }
      
      @media (max-width: 767px) {
        font-size: 32px;
      }
      
      @media (max-width: 480px) {
        font-size: 20px;
        &::after {
            height: 2px;
        }
      }
      
      @media (max-width: 320px) {
        font-size: 18px;
      }
`