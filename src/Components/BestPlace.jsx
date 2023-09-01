import { Box, styled } from "@mui/material";

const CardBox = styled(Box)`
    display:flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content:center;
`

const Image = styled('img')({
    width: 216.72,
    height: 225.248,
    flexShrink: 0,
    borderRadius:10,
})

const ImageFirst = styled('img')({
    width: 657.026,
    height: 468.342,
    flexShrink: 0,
    borderRadius:10,
})

export function BestPlace() {
    return (
        <Box style={{display: 'flex',}} className='bestplace'>
            <Box>
                    <ImageFirst
                        src="https://images.pexels.com/photos/92658/pexels-photo-92658.jpeg"
                        alt=""
                    />
            </Box>
            <CardBox>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '256.72px', height: '200.248px', flexShrink: '0' }}>
                    <Image
                        src='https://i.pinimg.com/originals/e3/4d/c3/e34dc34286f9f2f9b0377f34241f2510.jpg'
                        alt=""
                    />
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '256.72px', height: '200.248px', flexShrink: '0' }}>
                    <Image
                        src="https://t3.ftcdn.net/jpg/03/95/15/38/360_F_395153859_50qP4ngk8Vjtn498KhfDJMElEPwVimbe.jpg"
                        alt=""
                    />
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '256.72px', height: '200.248px', flexShrink: '0' }}>
                    <Image
                        src="https://images.pexels.com/photos/65614/coast-beach-rock-stones-65614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '256.72px', height: '200.248px', flexShrink: '0' }}>
                    <Image
                        src="https://images.pexels.com/photos/1559821/pexels-photo-1559821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                    />
                </Box>
            </CardBox>
        </Box>
    )
}
