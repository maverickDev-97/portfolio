import Styled from 'styled-components';
import { IAppTheme } from '../../../models/IAppTheme';

export const StyledFooterSocial = Styled.a<IAppTheme>`
    font-size: 20px;
    margin-right: 16px;
    color: inherit;

    @media (max-width: 480px) {
        box-sizing: border-box;
        padding: 6px 6px 4px;
        border-radius: 4px;
        border: 1px solid ${props => props.isLight ? '#a6aec7' : '#4d556a'};
        font-size: 14px;
        margin-right: 12px;
      }
`