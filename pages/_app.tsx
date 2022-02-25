import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Header from "../components/layout/Header";
import { useSelector, wrapper } from "../store";
import GlobalStyles from "../styles/GlobalStyles";
import { darkTheme, defaultTheme } from "../styles/theme";


const App = ({ Component, pageProps }: AppProps) => {
    const darkMode = useSelector(({darkMode}) => darkMode.isDarkMode);
    const theme = darkMode ? darkTheme : defaultTheme;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Header />
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default wrapper.withRedux(App);