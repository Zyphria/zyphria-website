import React from 'react'
import { Stack, Typography, Grid2 as Grid, Card } from '@mui/material'
function Loader() {
  return (
    <Stack sx={{ height: '80dvh', alignItems: 'center', justifyContent: 'center' }}>
      <img
        src="https://img.icons8.com/m_rounded/512/FFFFFF/discord-logo.png"
        width="20%"
        style={{
          filter: isCompleted && 'drop-shadow(0 0 50px rgb(95, 95, 95))',
          zIndex: 2
        }}
      />
      <Typography ref={el} variant="h2" textAlign="center" />
    </Stack>
  )
}

export default Loader
