import { CurrencyRupeeRounded } from "@mui/icons-material"
import styled from "styled-components"
import { cardItems } from "../data"
import Card from "./Card"
import '../App.css'
import { mobile } from "../responsive"
const Container = styled.div`
margin-top: 13px;
// border: 2px solid red;
`
const Wrapper = styled.div`
margin-left: 11%;
margin-right: 11%;
`
const Top = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
`
const Referral = styled.div`
display:flex;
flex-direction: column;
`
const ReferralText = styled.div`
// width: 150px;
// height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 21px;
/* identical to box height */
color: #800080;
${mobile({ lineHeight: '24px' })};
`
const Code = styled.div`
width: 153px;
height: 50px;
box-sizing: border-box;
border: 1.5px solid #DFDFDF;
border-radius: 10px;
display:flex;
align-items:center;
justify-content: center;
`
const CodeText = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */
letter-spacing: 0.75em;
color: #000000;
width: 124px;
height: 24px;
`
const Wallet = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
width: 145px;
height: 85px;
background: #FFFFFF;
box-shadow: 0px 2px 8px rgba(128, 0, 128, 0.15);
border-radius: 20px;
// border: 2px solid red;
${mobile({ width: '153px', height: '74px' })};
`
const WalletText = styled.div`
// width: 105px;
width: 100%;
height: 21px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
/* identical to box height */
color: #800080;
text-align: center;
${mobile({ lineHeight: '21px' })};
`

const Money = styled.div`
// border: 2px solid green;
width: 45px;
height: 24px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */
color: #000000;
display:flex;
align-items: center;
margin-left: 28px;
${mobile({ marginLeft: '33px' })};
`
const Amount = styled.div`
`
// //////////////////////////////////////////////////////////////

const Middle = styled.div`
margin-top: 5%;
display: flex;
flex-direction: column;
width: 90vw;
`
const Heading = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 30px;
/* identical to box height */
color: #800080;
${mobile({ fontSize: '24px', lineHeight: '36px' })}
`

const Cards = styled.div`
display: flex;
flex-direction:row;
justify-content: space-between;
overflow-x:scroll;
// border: 2px solid red;
width: 86%;
${mobile({ flexWrap: 'wrap' })}
`





// //////////////////////////////////////////////////////////////


const Bottom = styled.div`
`
const BottomText = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */
color: #800080;
margin-top: 5%;
`

const CardsContainer = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <Referral >
                        <ReferralText>Your Referral Code</ReferralText>
                        <Code>
                            <CodeText>
                                EDCH54
                            </CodeText>
                        </Code>
                    </Referral>
                    <Wallet>
                        <WalletText>Wallet Balance</WalletText>
                        <Money>
                            <CurrencyRupeeRounded style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '500', fontSize: '16px', lineHeight: '24px', color: '#000000' }} />
                            <Amount>500</Amount>
                        </Money>
                    </Wallet>
                </Top>
                <Middle>
                    <Heading>Friends who enrolled(3)</Heading>
                    <Cards>

                        {
                            cardItems.map((item) => (
                                <Card item={item} key={item.id} />
                            ))
                        }
                    </Cards>
                </Middle>
                <Bottom>
                    <BottomText>
                        Terms & Conditions
                    </BottomText>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default CardsContainer