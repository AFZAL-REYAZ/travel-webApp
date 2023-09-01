import { Box, Button, Typography, styled } from "@mui/material";

const ThirdBox = styled(Box)`
  display:flex;
  justify-content: center;
  align-items: center;
  padding:40px;
`
const Image = styled('img')({
    flexShrink: 0,
    borderRadius:10,
})

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

export function TravelTrends() {
    return (
        <ThirdBox className="treveltrendsMainBox">
            <Box style={{display:'flex',margin:'20px'}} className="treveltrends">
                <Box >
                    <Image 
                        style={{ width: '250px', height: '400px',marginTop:'30px'}}
                        src="https://cdn.pixabay.com/photo/2013/05/15/09/05/bridge-111326_1280.jpg"
                        alt=""
                    />
                </Box>
                <Box>
                    <Image
                        style={{ width: '300px', height: '450px',"&:hover":"hight:'500px'" }}
                        src="https://cdn.pixabay.com/photo/2013/04/16/14/22/brooklyn-bridge-105079_1280.jpg"
                        alt=""
                    />
                </Box>
                <Box>
                    <Image
                        style={{ width: '250px', height: '400px',marginTop:'30px' }}
                        src="https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg"
                        alt=""
                    />
                </Box>
            </Box>
            <Box style={{ marginRight: '10px' }} className='treveltrendsText'>
                <ThirdText1>Latest Travel Trends</ThirdText1>
                <ThirdText2>there are real opportunities for companies that keep pace with the latest travel trends and embrace new ways of doing business.</ThirdText2>
                <Button variant="text" style={{ background: '#FF5300', width: '150px', height: '50px', flexShrink: '0', color: '#FFF' }}>View More</Button>
            </Box>
        </ThirdBox>
    )
}
