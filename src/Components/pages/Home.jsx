import styled from '@emotion/styled'
import { Box, Typography, Button } from '@mui/material'
import CarouselSlick from '../CarouselSlick'
import Card from '../Card'
import  young from "../../assets/young.png"
import NearYou from '../NearYou'
import { BestPlace } from '../BestPlace'
import { TravelTrends } from '../TravelTrends'
import OurPatner from '../OurPatner'
import { Footer } from '../Footer'
import './Home.css'

const Text = styled(Typography)`
  color: #1D1B19;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  display:flex;
  justify-content: center;
  align-items: center;
`
const TextBox = styled(Box)`
  display:flex;
  padding:20px;
`
const Image = styled('img')({
  width: 780.233,
  height: 440.103,
  flexShrink: 0,
  borderRadius:15,
})

// second Box CSS

const SecondBox = styled(Box)`
  display:flex;
`
const NumberText = styled(Typography)`
  color: #FF5300;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 900;
line-height: normal;
`
const StringText = styled(Typography)`
color: #352F2B;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 900;
line-height: normal;
`
// ThirdBox CSS

const ThirdBox = styled(Box)`
  display:flex;
  justify-content: center;
  align-items: center;
  padding:40px;
`
const ThirdText1 = styled(Typography)`
  color: #1D1B19;
font-family: Roboto;
font-size: 48px;
font-style: normal;
font-weight: 900;
line-height: normal;
margin-bottom:10px;
`
const ThirdText2 = styled(Typography)`
color: #000;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: normal;
margin-bottom:10px;
`
const ThirdBoxCarousel = styled(Box)`
  height:400px;
  width:70%;
`
const Headone = styled(Typography)`
color: #1D1B19;
font-family: Roboto;
font-size: 48px;
font-style: normal;
font-weight: 900;
line-height: normal;
display:flex;
justify-content: center;
align-items: center;
margin-top:65px;
padding:30px;
`
const Home = () => {
  return (
    <Box>
      <TextBox className='textbox'>
          <Text>Its Time For New Adventures,Escapes thrills & experiences</Text>
          <Image src={young} alt='loding'/>
      </TextBox>
      
      <SecondBox style={{ display:'flex',justifyContent:'space-between',padding:'20px' }}>
        <Box style={{ display:'flex' }}>
          <Box>
            <NumberText>2400</NumberText>
            <StringText>Travel Experiences</StringText>
          </Box>
        </Box>  
        <Box style={{ display:'flex' }}>
          <Box>
            <NumberText>55+</NumberText>
            <StringText>TCountries</StringText>
          </Box>
        </Box>
        <Box style={{ display:'flex' }}>
          <Box>
            <NumberText>Best Price</NumberText>
            <StringText>Guaranteed</StringText>
          </Box>
        </Box>
        <Box style={{ display:'flex' }}>
          <Box>
            <NumberText>84 Million+</NumberText>
            <StringText>User per year</StringText>
          </Box>
        </Box>
      </SecondBox>

      <ThirdBox className='thirdbox'>
        <Box style={{marginRight:'10px'}}>
          <ThirdText1>Find The Perfect Place</ThirdText1>
          <ThirdText2>A list of the top 75 Best Tourist Places to See in world for a perfect holiday or a trip.</ThirdText2>
          <Button variant="text" style={{background: '#FF5300',width: '150px',height: '50px', flexShrink: '0',color: '#FFF'}}>Text</Button>
        </Box>
        <ThirdBoxCarousel>
          <CarouselSlick/>
        </ThirdBoxCarousel>
      </ThirdBox>

      <Box className='toprated'>
        <Headone>Top rated Experiences on Travel</Headone>
        <Box>
          <Card/>
        </Box>
      </Box>

      <Box>
        <Headone>Destinations near you</Headone>
        <Box>
          <NearYou/>
        </Box>
      </Box>

      <Box>
        <Headone>Best Places on Earth</Headone>
        <Box>
          <BestPlace/>
        </Box>
      </Box>

      <Box>
        <Box>
          <TravelTrends/>
        </Box>
      </Box>

      <Box className='ourpatnerMainBox'>
        <Headone>Our Partners</Headone>
        <Box>
          <OurPatner/>
        </Box>
      </Box>

      <Box>
        <Box>
          <Footer/>
        </Box>
      </Box>
    </Box>
  )
}

export default Home