import { CurrencyRupeeRounded } from "@mui/icons-material"
import styled from "styled-components"
import { laptop, mobile } from "../responsive"

const Container = styled.div`
// border: 2px solid black;
// width: 486px;
width: 50%;
height: 188px;
// height:29.25vh;
background: #FFFFFF;
box-shadow: 0px 3px 100px rgba(0, 0, 0, 0.1);
border-radius: 20px;
// display: flex;
// flex-direction: column;
position: relative;
${mobile({ width: '100%' })};
${laptop({width: '65%'})};
`
const Top = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem;
${mobile({ flexWrap: 'wrap' })};
${laptop({ flexWrap: 'wrap' })};
`
const LeftBox = styled.div`
display: flex;
flex-direction: column;
${mobile({ flex: '1 1 45%' })};
${laptop({ flex: '1 1 45%' })};
`
const Text = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
color: #800080;
`
const Money = styled.div`
display: flex;
align-items: center;
`
const RupeeIcon = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 48px;
/* identical to box height */
color: #000000;
`
const Amount = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 48px;
/* identical to box height */
color: #000000;
`
/////////////////////////////////////////
const MidBox = styled.div`
${mobile({ flex: '1 1 45%' })};
${laptop({ flex: '1 1 45%' })};
`
const RightBox = styled.div`
${mobile({ flex: '1 1 45%' })};
${laptop({ flex: '1 1 45%' })};
`

/////////////////////////////////////////
const Bottom = styled.button`
// border: 2px solid red;
display: flex;
justify-content: center;
align-items: center;
width: 180px;
height: 40px;
margin: 0 auto;               // to horizontally center the button
background: #800080;
border-radius: 20px;
margin-top: 3%;
cursor: pointer;
border: none;
${laptop({position: 'absolute', left: '45%', top: '55%', width: '140px'})};
${mobile({position: 'absolute', left: '49%', top: '50%', width: '160px'})};
`
const ButtonText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */
color: #FFFFFF;
${laptop({fontSize: '14px'})}
${mobile({fontSize: '16px'})}
`
const Dashboard = () => {
    return (
        <Container>
            <Top>
                <LeftBox>
                    <Text type='earning'>Referral Earning</Text>
                    <Money>
                        <RupeeIcon>
                            <CurrencyRupeeRounded />
                        </RupeeIcon>
                        <Amount>2,500</Amount>
                    </Money>
                </LeftBox>

                <MidBox>
                    <Text type='referrals'>Total Referrals</Text>
                    <Amount>7</Amount>
                </MidBox>

                <RightBox>
                    <Text type='balance'>Wallet Balance</Text>
                    <Money>
                        <RupeeIcon>
                            <CurrencyRupeeRounded />
                        </RupeeIcon>
                        <Amount>500</Amount>
                    </Money>
                </RightBox>
            </Top>
            <Bottom>
                <ButtonText>
                    Withdraw Balance
                </ButtonText>
            </Bottom>

            {/* Bottom Buton*/}
        </Container>
    )
}

export default Dashboard