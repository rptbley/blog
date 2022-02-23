import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { wrapper } from "../store";
import GlobalStyles from "../styles/GlobalStyles";


const App = ({ Component, pageProps }: AppProps) => {
    const theme = {
        default: {
            background: "white",
            color: "black"
        },
        black: {
            background: "black",
            color: "white"
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Component {...pageProps}/>
        </ThemeProvider>
    )
}

export default wrapper.withRedux(App);