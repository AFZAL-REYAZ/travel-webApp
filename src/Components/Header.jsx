import styled from '@emotion/styled'
import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Heading = styled(Box)`
    height:60px;
    background-color:#FFF;
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
const LinkBox = styled(Box)`
    margin-left:auto;
    display:flex;
    align-items:center;
`
const Link = styled(Typography)`
    color: #1D1B19;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-right:25px;
    margin-left:25px;
`
const Header = () => {
  return (
    <Box>
        <Heading>
            <Toolbar>
                <Logofirst>T</Logofirst>
                <Logosecond>velia</Logosecond>
                <LinkBox>
                    <Link>Home</Link>
                    <Link>Contect</Link>
                    <Link>About</Link>
                    <Link>login</Link>
                    <Link>SingnUp</Link>
                </LinkBox>
            </Toolbar>
        </Heading>
    </Box>
  )
}

export default Header