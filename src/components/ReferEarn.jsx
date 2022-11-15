import { NavigateNext } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"
import GoBack from "./GoBack"

const Container = styled.div`
// position: relative;
// border: 2px solid black;
${mobile({ marginTop: '5%' })};
`
const Wrapper = styled.div`
// position: absolute;
// left: 187px;
margin-left: 11%;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
color: #000000;
// border: 2px solid red;
width: 266px;
height: 21px;
display:flex;
align-items: center;
`

const ReferEarn = ({ goback }) => {
    console.log(goback);
    return (
        <Container>
            <Wrapper>
                UI/UX
                <NavigateNext style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '14px' }} />
                Refer & Earn
                <NavigateNext style={{ fontStyle: 'normal', fontWeight: '400', fontSize: '14px' }} />
                Friends Referred
            </Wrapper>
            {
                goback && <GoBack />
            }

        </Container>
    )
}

export default ReferEarn