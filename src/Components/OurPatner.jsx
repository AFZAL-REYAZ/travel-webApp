import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import allisfine from '../assets/all-is-fine.png'
import portrait from '../assets/portrait.png'
import wellbeing from '../assets/wellbeing.png'
import woman from '../assets/woman.png'

const CardBox = styled(Box)`
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
`
const Image = styled('img')({
    width: 146.702,
    height: 96.936,
    flexShrink: 0,
    borderRadius:10,
})

const City = styled(Typography)`
color: #1D1B19;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 900;
line-height: normal;
padding-left:20px;
margin:5px;
`

export default function OurPatner() {
    return (
        <CardBox className="ourpatnerWrap">
            <Box style={{ display:'flex',alignItems:'center',justifyContent:'center', width: '316.72px', height: '132.248px',flexShrink: '0' }}>
                    <Image
                        src={allisfine}
                        alt=""
                    />
                <Box orientation="horizontal">
                    <City level="body-xs">Lara Nosworthy</City>
                </Box>
            </Box>
            <Box style={{ display:'flex',alignItems:'center',justifyContent:'center', width: '316.72px', height: '132.248px',flexShrink: '0' }}>
                    <Image
                        src={portrait}
                        alt=""
                    />
                <Box orientation="horizontal">
                    <City level="body-xs">Alana Baldessin</City>
                </Box>
            </Box>
            <Box style={{display:'flex',alignItems:'center',justifyContent:'center', width: '316.72px', height: '132.248px',flexShrink: '0' }}>
                    <Image
                        src={wellbeing}
                        alt=""
                    />
                <Box orientation="horizontal">
                    <City level="body-xs">Emma Fritzsche</City>
                </Box>
            </Box>
            <Box style={{ display:'flex',alignItems:'center',justifyContent:'center', width: '316.72px', height: '132.248px',flexShrink: '0' }}>
                    <Image
                        src={woman}
                        alt=""
                    />
                <Box orientation="horizontal">
                    <City level="body-xs">Joel Lynas</City>
                </Box>
            </Box>
        </CardBox>
    );
}