import { ArrowBack } from "@mui/icons-material"
import styled from "styled-components"
import { desktop } from "../responsive"

const Container = styled.div`
margin-left: 11%;
margin-top: 4%;
${desktop({ display: 'none' })};
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 10px;
width: 91px;
height: 24px;
// border: 2px solid red;
cursor: pointer;
`

const GoBackText = styled.div`
width: 66px;
height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */
color: #800080;
// border: 2px solid black;
`

const GoBack = () => {
    return (
        <Container>
            <Wrapper>
                <ArrowBack style={{ color: '#800080' }} />
                <GoBackText>go back</GoBackText>
            </Wrapper>
        </Container>
    )
}

export default GoBack