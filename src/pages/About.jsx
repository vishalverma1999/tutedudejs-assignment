import Navbar from '../components/Navbar'
import ReferEarn from '../components/ReferEarn'
import AboutComponent from '../components/AboutComponent'

const About = () => {
  return (
    <>
      <Navbar />
      <ReferEarn goback={false}/>
      <AboutComponent />
    </>
  )
}

export default About