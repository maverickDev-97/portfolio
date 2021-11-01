import Styled from 'styled-components';
import { IAppTheme } from '../../models/IAppTheme';

export const StyledThemeToggler = Styled.div<IAppTheme>`
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 5px;
    background-color: ${props => props.isLight ? '#e7e7f0' : '#1d284b'}
`