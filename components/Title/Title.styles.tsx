import Styled from 'styled-components';

export const StyledTitle = Styled.h1`
    position: relative;
    margin: 0 0 1.5rem;
    font-size: 40px;
    opacity: 0;
    animation-name: title-fading;
    animation-duration: 1000ms;
    animation-fill-mode: forwards;

    @keyframes title-fading {
        0% {
            left: -150px;
            opacity: 0;
        }
        100% {
            left: 0;
            opacity: 1;
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
        margin-bottom: 16px;
      }
      
      @media (max-width: 480px) {
        font-size: 24px;
        margin-bottom: 12px;
      }
      
      @media (max-width: 320px) {

      }

`