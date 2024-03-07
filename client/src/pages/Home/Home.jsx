import React from 'react';
import './Home.css';
import { Grid } from '@mui/material';
import HeroSectionOne from '../../components/Hero/HeroOne';
// import HeroSectionTwo from '../../components/Hero/HeroTwo';


const Home = () => {
    return (
        <Grid
            container
            spacing={4}
            direction='row'
            justifyContent='center'
            alignItems='center'>
            <Grid item>
                <HeroSectionOne />
            </Grid>
            {/* <Grid item>
                <HeroSectionTwo />
            </Grid> */}
        </Grid>
    );
};

export default Home;