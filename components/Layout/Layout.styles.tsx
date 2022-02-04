import Styled from 'styled-components';
import { IAppTheme } from '../../models/IAppTheme';

export const StyledLayout = Styled.div<IAppTheme>`
    min-height: 100vh;
    background: ${props => props.isLight ? '#F4F4F6' : '#0b132b'};
    color: ${props => props.isLight ? '#0b132b' : '#fff'};
    transition: all .25s ease-in;
`

export const StyledLayoutMainContent = Styled.main`
    padding-bottom: 144px;
`