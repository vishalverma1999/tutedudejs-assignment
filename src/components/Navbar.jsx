import { AccountCircleRounded, ExpandMore } from "@mui/icons-material"
import styled from "styled-components"
import { mobile } from "../responsive"
import logo from "../images/logo.png"

const Container = styled.div`
height: 73.03px;
// border: 2px solid red;
${mobile({ marginTop: '8%' })}
`
const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
align-items: center;
justify-content: space-between;
// border: 2px solid green;
`
const Left = styled.div`
// border: 2px solid black;
flex:1;
margin-left:5%;
${mobile({marginRight: '2%'})};
`
const ImageCom = styled.img`
width: 160px;
// width: 24%;
height: 63px;
cursor: pointer;
// ${mobile({width: '85%'})}
`
const Right = styled.div`
// border: 2px solid black;
flex:1;
display:flex;
justify-content: space-between;
margin-right:5%;
${mobile({marginRight: '2%'})};
`
const MenuItem1 = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 123.5%;
/* or 22px */
text-align: center;
color: rgba(128, 0, 128, 0.25);
display: flex;
align-items: center;
cursor: pointer;
${mobile({ display: 'none' })};
`
const MenuItem2 = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 123.5%;
/* or 22px */
text-align: center;
color: rgba(128, 0, 128, 0.25);
display: flex;
align-items: center;
cursor: pointer;
${mobile({ display: 'none' })};
`
const MenuItem3 = styled.div`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 123.5%;
/* or 22px */
text-align: center;
color: rgba(128, 0, 128, 0.25);
display: flex;
align-items: center;
cursor: pointer;
${mobile({ background: '#800080', borderRadius: '10px', padding: '12px 25px', gap: '10px', justifyContent: 'center', flex: '1' })};
`
const ProfileIcon = styled.div`
${mobile({ display: 'none' })};
display: flex;
align-items: center;
`
const ProfileName = styled.div`
width: 111px;
height: 22px;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 123.5%;
/* or 22px */
text-align: center;
color: #800080;
${mobile({ fontSize: '16px', lineHeight: '24px', color: '#FFFFFF' })};
`
const ProfileExpand = styled.div`
background: white; 
color: #800080;
display: flex;
align-items: center;
${mobile({ background: 'none', color: 'white' })};
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <ImageCom src={logo} alt="Site Logo" />
                </Left>
                <Right>
                    <MenuItem1>My Assignment</MenuItem1>
                    <MenuItem2>Chat with Mentor</MenuItem2>
                    <MenuItem3>
                        <ProfileIcon>
                            <AccountCircleRounded style={{ background: 'white', color: '#800080' }} />
                        </ProfileIcon>
                        <ProfileName>ProfileName</ProfileName>
                        <ProfileExpand>
                            <ExpandMore />
                        </ProfileExpand>
                    </MenuItem3>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar