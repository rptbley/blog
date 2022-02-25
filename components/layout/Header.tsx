import styled from "styled-components";


const Container = styled.header`
    ${({theme}) => theme}
    margin: 2% 2% auto;
    font-size: 30px;
    font-weight: 900;
`;

const Header: React.FC = () => {
    return(
        <Container>
            This is header area.
        </Container>
    )
}

export default Header;