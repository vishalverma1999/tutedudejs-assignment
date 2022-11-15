import { CurrencyRupeeRounded } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
margin-right: 2.5%;
background: linear-gradient(270deg, #800080 0%, #FF864C 100%);
border-radius: 20px;
min-width: 36%;
min-height: 228px;
// border: 2px solid black;
${mobile({ width: "100%", height: "auto", marginBottom: '15px', overflow: 'hidden' })};
`
const Wrapper = styled.div`
width: 100%;
height: 100%;
padding-left: 6%;
// position: relative;

`
const Top = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: -15px;
`
const Name = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 24px;
/* identical to box height */
color: #FFFFFF;
`
const Date = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
color: #FFFFFF;
margin-right: 12.3%;
`
const Middle = styled.div`
// position: absolute;
// top: 40px;
`
const Enrollment = styled.h3`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 21px;
/* identical to box height */
color: #FFFFFF;
`
const Courses = styled.div`
/* Auto layout */
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 10px;
width:70%;
margin-left: 10px;
// border: 2px solid green;
margin-top: auto;
`
const Course = styled.div`
box-sizing: border-box;
border: 1.5px solid #EEAEAE;
border-radius: 20px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */
color: #FFFFFF;
padding: 0px 8px;
`
const Bottom = styled.div`
display: flex;
align-items: center;
margin-top: 6%;
// position: absolute;
// top: 150px;
`
const BottomText = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height */
color: #FFFFFF;
`
const Money = styled.div`
display:flex;
align-items: center;
`
const Amount = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
/* identical to box height */
color: #FFFFFF;
`



const Card = ({ item }) => {
    console.log(item);
    return (
        <Container>
            <Wrapper>
                <Top>
                    <Name>{item.name}</Name>
                    <Date>{item.date}</Date>
                </Top>
                <Middle>
                    <Enrollment>Courses Enrolled({item.enrolled})</Enrollment>
                    <Courses>
                        {
                            item.courses.map((course) => (
                                <Course key={course} >{course}</Course>
                            ))
                        }

                    </Courses>
                </Middle>
                <Bottom>
                    <BottomText>Referral Amount</BottomText>
                    <Money>
                        <CurrencyRupeeRounded style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '600', fontSize: '24px', lineHeight: '36px', color: '#FFFFFF' }} />
                        <Amount>{item.amount}</Amount>
                    </Money>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export default Card