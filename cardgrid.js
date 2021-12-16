import { Container, Grid } from '@material-ui/core';
import React from 'react';
import CustomCard from '../../custom-card';

const Cardgrid = () => {
    return (
        <Container>
            <Grid conatiner spacing ={4}>
            <Grid xs={12} sm={6} md={4}>
                <CustomCard setShowBigcard={setShowBigcard}/>
                </Grid>

            </Grid>

        </Container>
    )
}

export default Cardgrid
