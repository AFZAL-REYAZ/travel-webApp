import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import attractive from '../assets/attractive.png'
import beautiful from '../assets/beautiful.png'
import camping from '../assets/camping.png'
import courtyard from '../assets/courtyard.png'
import manriding from '../assets/man-riding.png'
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';

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
    borderRadius: 10,
})

const City = styled(Typography)`
color: #000;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 900;
line-height: normal;
padding-left:20px;
margin:5px;
`
const RatingWeb = styled(Typography)`
width: 83.282px;
height: 11.996px;
flex-shrink: 0;
color:#FFC107;
padding-left:20px;
margin:5px;
`

export default function NearYou() {
    return (
        <CardBox>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '316.72px', height: '132.248px', flexShrink: '0' }}>
                <Image
                    src={attractive}
                    alt=""
                />
                <Box orientation="horizontal">
                    <City level="body-xs">Bangalore</City>
                    <RatingWeb level="body-xs">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Stack>
                    </RatingWeb>
                </Box>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '316.72px', height: '132.248px', flexShrink: '0' }}>
                <Image
                    src={beautiful}
                    alt=""
                />
                <Box orientation="horizontal">
                    <City level="body-xs">Island</City>
                    <RatingWeb level="body-xs">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                        </Stack>
                    </RatingWeb>
                </Box>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '316.72px', height: '132.248px', flexShrink: '0' }}>
                <Image
                    src={camping}
                    alt=""
                />
                <Box orientation="horizontal">
                    <City level="body-xs">South East Asia</City>
                    <RatingWeb level="body-xs">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Stack>
                    </RatingWeb>
                </Box>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '316.72px', height: '132.248px', flexShrink: '0' }}>
                <Image
                    src={courtyard}
                    alt=""
                />
                <Box orientation="horizontal">
                    <City level="body-xs">Himalayan</City>
                    <RatingWeb level="body-xs">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Stack>
                    </RatingWeb>
                </Box>
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '316.72px', height: '132.248px', flexShrink: '0' }}>
                <Image
                    src={manriding}
                    alt=""
                />
                <Box orientation="horizontal">
                    <City level="body-xs">Himalayan</City>
                    <RatingWeb level="body-xs">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                        </Stack></RatingWeb>
                </Box>
            </Box>
        </CardBox>
    );
}
