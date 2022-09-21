import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assests/images/banner.png';

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '212px', xs: '70px' },
                ml: { sm: '50px' }
            }}
            position="relative"
            p="20px"
        >
            <Typography
                color='#FF2625'
                fontWeight='600'
                fontSize='24px'
            >
                Fitness Club
            </Typography>
            <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb='24px' mt='28px'>
                Sweat, Smile <br /> and Repeat
            </Typography>
            <Typography fontSize='24px' lineHeight='36px' mb={4}>
                Check out the most effective exercises
            </Typography>
            <Button variant="contained" color="error" href='#exercises' sx={{ backgroundColor: '#FF2625', padding: '12px' }}>
                Explore Exercises
            </Button>
            <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="hero banner image" className='hero-banner-img' />
        </Box>
    )
}

export default HeroBanner