import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Title = styled(Box)`
color: #1D1B19;
font-family: Roboto;
font-size: 24px;
font-style: normal;
font-weight: 900;
line-height: normal;
margin:20px;
`

const Desc = styled(Box)`
    color: #C6C6C6;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 900;
line-height: normal;
margin:5px;
`
const BoxFirst = styled(Box)`
    width:400px;
`
const Logofirst = styled(Typography)`
    color: #FF5300;
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`
const Logosecond = styled(Typography)`
    color: #000;
    font-family: Roboto;
    font-size: 48px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
`

export function Footer() {
    return (
        <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }} className='footerBox'>
            <BoxFirst>
                <Box style={{display:'flex'}}>
                    <Logofirst>T</Logofirst>
                    <Logosecond>velia</Logosecond>
                </Box>
                <Desc>An adventure is an exciting experience that is typically bold, sometimes risky or undertaking. Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting or participating in extreme sports.</Desc>
            </BoxFirst>
            <Box>
                <Title>Useful Links</Title>
                <Desc>Home</Desc>
                <Desc>About</Desc>
                <Desc>Contect</Desc>
                <Desc>Blog</Desc>
                <Desc>Adventure</Desc>
            </Box>
            <Box>
                <Title>Support Links</Title>
                <Desc>FAQ</Desc>
                <Desc>Help</Desc>
                <Desc>Terms & Conditions</Desc>
            </Box>
            <Box>
                <Title>Newsletter Subscription</Title>
                <Desc>569 bangalore Auroville Beach, 560001</Desc>
                <Desc>afjalreyaz@gmail.com</Desc>
                <Desc>9102548287</Desc>
            </Box>
        </Box>
    )
}