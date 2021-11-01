import { FC, ReactElement, useContext } from 'react'
import { ThemeContext } from '../../store/ThemeProvider';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StyledLayout } from './Layout.styles';
import { useAppTheme } from '../../hooks/useAppTheme';

export interface LayoutProps {
    children: ReactElement<any, any>
}

const Layout: FC<LayoutProps> = ({ children }) => {

    const theme = useContext(ThemeContext)

    const { isLight } = useAppTheme();

    return (
        <StyledLayout isLight={isLight}>
            <Header />
            <main>
                <div className='container'>
                    {children}
                </div>
            </main>
            <Footer />
        </StyledLayout>
    )
}

export default Layout;