import { Stack, Typography, Grid2 as Grid, Card, useMediaQuery } from '@mui/material'
import React from 'react'
import Layout from './Layout'
import Title from './Title'

import { ABOUT } from '../../zyphria-data';

function About() {
  const { TITLE, SUBTITLE, FEATURES } = ABOUT;

  return (
    <Layout width="80%" id="About">
      <div>
        <Title title={TITLE} subtitle={SUBTITLE} justify="flex-start" />
      </div>
      <Grid container spacing={2} sx={{ width: '100%' }}>
        {
          FEATURES.map(({ title, description, icon }) => (
            <Grid size={{ xl: 3, lg: 3, md: 6, xs: 12 }}>
              <Card sx={{
                p: 3,
                // '-webkit-filter': 'blur(7px)',
                background: '#1F1F21',
                color: 'white',
              }}>
                <span class="material-symbols-outlined" style={{ fontSize: 42 }}>
                  {icon}
                </span>
                <Stack spacing={1}>
                  <Typography variant="h6">
                    {title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#fff9' }}>
                    {description}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Layout>
  )
}

export default About
