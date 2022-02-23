import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useSelector } from "../store";
import { darkModeActions } from "../store/darkMode";


const Container = styled.div<{dark: boolean}>`
    ${props => props.dark ? props.theme.black : props.theme.default};
`;

const index: React.FC = () => {
    const darkMode = useSelector(({darkMode}) => darkMode.isDarkMode)

    const dispatch = useDispatch();

    const ChangeMode = () => {
        dispatch(darkModeActions.setDarkMode(!darkMode));
    }
    return (
        <Container dark={darkMode}>
            Hello, Next
            <button onClick={ChangeMode}>darkMode?</button>
        </Container>
    )
}

export default index;