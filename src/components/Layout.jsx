import { Stack } from '@mui/material'
import React from 'react'

function Layout({ children, width, id }) {
  return (
    <Stack spacing={10} justifyContent="center" sx={{
      justifyContent: "center",
      alignItems: "center",
      minHeight: '100vh',
      maxWidth: width || { xs: "90%", md: "50%", lg: "50%" },
    }}
      id={id}
    >
      {children}
    </Stack>
  )
}

export default Layout
