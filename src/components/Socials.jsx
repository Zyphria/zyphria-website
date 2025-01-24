import { Card, Stack, Grid2 as Grid, Box, useTheme, useMediaQuery } from '@mui/material'
import React from 'react'
import Layout from './Layout'
import Title from './Title'

import { SOCIALS } from '../../zyphria-data'

function Socials({ ...rest }) {

  const { TITLE, SUBTITLE, LINKS } = SOCIALS;

  return (
    <Layout id="Contact">
      <Title title={TITLE} subtitle={SUBTITLE} />
      <Stack sx={{ maxWidth: '100%' }}>
        <Grid className="ul" container spacing={{ xl: 25, lg: 15, md: 15, sm: 15, xs: 10 }} sx={{ width: '100%', }}>
          {
            LINKS.map(({ image, to }) => (
              <Grid className="li" size={{ xl: 3, lg: 3, md: 3, xs: 3 }}>
                {/* {!matches ? <Box class="image"><img src={image} width={matches ? '100%' : '100%'} /></Box> : <img src={image} width={matches ? '100%' : '100%'} />} */}
                <Box class="image" onClick={() => window.location.href = to}><img src={image} width={'100%'} /></Box>
              </Grid>
            ))
          }
        </Grid>

      </Stack>
    </Layout>

  )
}

export default Socials
