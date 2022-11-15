import Navbar from '../components/Navbar'
import ReferEarn from '../components/ReferEarn'
import CardsContainer from '../components/CardsContainer'

const Home = () => {
    return (
        <>
            <Navbar />
            <ReferEarn goback={true}/>
            <CardsContainer />
        </>
    )
}

export default Home