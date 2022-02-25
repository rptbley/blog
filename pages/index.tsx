import styled from "styled-components";


const Container = styled.div`
    ${({theme}) => theme}
`;

const index: React.FC = () => {
    return (
        <Container>
        </Container>
    )
}

export default index;