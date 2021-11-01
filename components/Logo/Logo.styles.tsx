import Styled from 'styled-components';
import { IAppTheme } from '../../models/IAppTheme'

export const StyledLogo = Styled.a<IAppTheme>`
    cursor: pointer;
    width: 48px;
    height: 4px;
    background: ${props => props.isLight ? '#0b132b' : '#fff'};
`