import styled from "styled-components"
import Dashboard from "./Dashboard"
import Invite from '../images/Invite.svg'
import referralCoupon from '../images/referralCoupon.svg'
import rupee from '../images/rupee.svg'
import wallet from '../images/wallet.svg'
import discount from '../images/discount.svg'
import { workingDatas } from "../data"
import { laptop, mobile } from "../responsive"

const Container = styled.div`
// border: 2px solid blue;
margin-left: 14%;
margin-right: 14%;
margin-top: 5%;
position: absolute;
top: 10%;
overflow-y: scroll;
max-height: 80%;
${mobile({ marginLeft: '5%', marginRight: '5%', top: '26%' })};
${laptop({ top: '19%' })};
`
const Wrapper = styled.div`
`
const Top = styled.div`
display: flex;
justify-content: space-between;
// flex-wrap: wrap;
${mobile({ flexWrap: 'wrap' })};
`
const Referral = styled.div`
display:flex;
flex-direction: column;
// border: 3px solid black;
${mobile({ width: '100%', marginTop: '5%' })};
${laptop({ paddingLeft: '5%', width: '50%' })};
`
const ReferralText = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height */
color: #800080;
`
const Code = styled.div`
border: 1.5px solid;
border-radius: 10px;
border-image: linear-gradient(to left, rgba(128, 0, 128, 1), rgba(255, 134, 76, 1)) 1 ;
box-sizing: border-box;
// width: 358px;
width: 22.37rem;
height: 60px;
display: flex;
align-items: center;
justify-content: center;
${mobile({ width: '100%' })};
${laptop({ width: '80%' })};
`
const CodeText = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 30px;
/* identical to box height */
letter-spacing: 1.5em;
color: #800080;
// width: 230px;
width: 64%;
${laptop({ letterSpacing: '0.7em', fontSize: '18px' })};
`





const Middle = styled.div`
margin-top: 5%;
// border: 2px solid red;
width: 70%;
display: flex;
flex-direction: column;
${mobile({ width: '100%' })};
`
const Heading = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height */
color: #800080;
`
const WorkingSection = styled.div`
// border: 2px solid black;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`
const Data1 = styled.div`
// flex:1;
flex: 1 1 34%;
display: flex;
align-items: center;
// border: 2px solid green;
padding-right: 4.5%;
margin-bottom: 4%;
max-width: 45%;
${mobile({ minWidth: '100%' })}
`
const Left = styled.div`
`
const Circle = styled.div`
width: 65px;
height: 65px;
border-radius: 50%;
background: rgba(217, 217, 217, 0.25);
display: flex;
justify-content: center;
align-items: center;
`
const InviteIcon = styled.img`
`
const Right = styled.div`
margin-left: 2%;
// border: 2px solid red;
`
const Title = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */
color: #000000;
margin: 0px;
padding: 0px;
`
const Text = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #4D4D4D;
margin: 0px;
padding: 0px;
`


const Bottom = styled.div`
`
const Link1 = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */
color: #800080;
`
const Link2 = styled.h1`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */
color: #800080;
`

const AboutComponent = () => {
  const iconArr = [Invite, referralCoupon, rupee, wallet, discount];

  return (
    <Container>
      <Wrapper>
        <Top>
          <Dashboard />
          <Referral>
            <ReferralText>Your Referral Code</ReferralText>
            <Code>
              <CodeText>
                EDCH54
              </CodeText>
            </Code>
          </Referral>
        </Top>

        <Middle>
          <Heading>How does it work?</Heading>
          <WorkingSection>
            {
              workingDatas.map((data) => (
                <Data1 key={data.id}>
                  <Left>
                    <Circle>
                      <InviteIcon src={iconArr[data.icon]} alt="Invite People " />
                    </Circle>
                  </Left>
                  <Right>
                    <Title>{data.title}</Title>
                    <Text>{data.text}</Text>
                  </Right>
                </Data1>
              ))
            }
          </WorkingSection>
        </Middle>

        <Bottom>
          <Link1>Friends Who Enrolled</Link1>
          <Link2>Terms & Conditions</Link2>
        </Bottom>
      </Wrapper>
    </Container>
  )
}

export default AboutComponent