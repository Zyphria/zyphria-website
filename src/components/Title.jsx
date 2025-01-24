import { Stack, Typography } from '@mui/material'
import React from 'react'

function Title({ title, subtitle, titleVariant, noGlow }) {
  return (
    <Stack spacing={4} sx={{ alignItems: 'center' }}>
      <Typography variant={titleVariant || 'h3'} textAlign="center" sx={{
        filter: !noGlow && 'drop-shadow(0 0 50px rgb(107, 107, 107))'
      }}>
        {title}
      </Typography>

      <Typography variant="body2" textAlign="center" sx={{ color: '#fff9', maxWidth: 800, }}>
        {subtitle}
      </Typography>
    </Stack>
  )
}

export default Title
