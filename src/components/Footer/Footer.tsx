import React, { FC, ReactElement } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: 'auto',
        backgroundColor: 'info.dark',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              News Web App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router | Redux | Reduxjs/toolkit | Typescript`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
