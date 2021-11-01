import Styled from 'styled-components';
import { IAppTheme } from '../../models/IAppTheme';

export const StyledThemeToggler = Styled.div<IAppTheme>`
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: ${props => props.isLight ? '#e7e7f0' : '#1d284b'}
`