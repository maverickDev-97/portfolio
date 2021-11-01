import Styled from 'styled-components';

export const StyledFooterMail = Styled.div`
    display: flex;
    font-size: 20px;
    align-items: center;
    & a {
        margin-right: 10px;
    }
    & .mail__icon {
        position: relative;
        cursor: pointer;
        box-sizing: border-box;
        padding: 6px 10px;
        border: 1px solid #c5c9d7;
        border-radius: 5px;
    }
    & svg {
        position: relative;
        top: 1px;
        font-size: 16px;
    }
    & .mail__tooltip {
        box-sizing: border-box;
        width: 170px;
        padding: 10px 0;
        position: absolute;
        z-index: 5;
        left: 50%;
        transform: translateX(-50%);
        top: -64px;
        background: #fff;
        color: #0b132b;
        font-size: 15px;
        border-radius: 5px;
        text-align: center;
    }

    @media (min-width: 992px) and (max-width: 1220px) {
        & .mail__tooltip {
            left: -48px;
        }
      }
      
      @media (min-width: 768px) and (max-width: 991px) {
        & .mail__tooltip {
            left: -48px;
        }
      }
      
      @media (max-width: 767px) {
        & .mail__tooltip {
            left: -48px;
        }
      }
      
      @media (max-width: 480px) {
        font-size: 14px;
        & a {
            margin-right: 0;
        }
        & .mail__icon {
            display: none;
        }
      }
      
      @media (max-width: 320px) {
      }

`