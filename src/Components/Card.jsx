import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const CardBox = styled(Box)`
    display:flex;
`
const Image = styled('img')({
    width: 252.702,
    height: 336.936,
    flexShrink: 0,
    borderRadius: 10,
})

const Title = styled(Typography)`
    color: #000;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 900;
line-height: normal;
`
const City = styled(Typography)`
color: #FFD4BF;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 900;
line-height: normal;
`
const RatingWeb = styled(Typography)`
width: 83.282px;
height: 11.996px;
flex-shrink: 0;
color:#FFC107;
`
export default function BasicCard() {
    return (
        <CardBox className="cardbox">
            <Box style={{ width: 320 }} className="card-smallbox">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1661915320026-84ca2c96faa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt=""
                />
                <Box orientation="horizontal">
                    <Title level="body-xs">Beautiful luxury outdoor swimming pool hotel resort:</Title>
                    <City level="body-xs">Bangalore</City>
                    <RatingWeb level="body-xs"><Stack spacing={1}>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    </Stack></RatingWeb>
                </Box>
            </Box>
            <Box style={{ width: 320 }}>
                <Image
                    src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt=""
                />
                <Box orientation="horizontal">
                    <Title level="body-xs">Patio balcony with chair around sea ocean view</Title>
                    <City level="body-xs">Island</City>
                    <RatingWeb level="body-xs">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Stack>
                    </RatingWeb>
                </Box>
            </Box>
            <Box style={{ width: 320 }}>
                <Image
                    src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhY2VzJTIwdG8lMjB2aXNpdCUyMGluJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    alt=""
                />
                <Box orientation="horizontal">
                    <Title level="body-xs">athletic man floats red boat river</Title>
                    <City level="body-xs">South East Asia</City>
                    <RatingWeb level="body-xs">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Stack>
                    </RatingWeb>
                </Box>
            </Box>
            <Box style={{ width: 320 }}>
                <Image
                    src="https://images.unsplash.com/photo-1517427677506-ade074eb1432?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt=""
                />
                <Box orientation="horizontal">
                    <Title level="body-xs">Beautiful hikers top mountain view</Title>
                    <City level="body-xs">Himalayan</City>
                    <RatingWeb level="body-xs">
                        <Stack spacing={1}>
                            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        </Stack>
                    </RatingWeb>
                </Box>
            </Box>
        </CardBox>
    );
}