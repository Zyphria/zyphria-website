import { useState, useEffect } from 'react'
import '../App.css'
import { Button, Toolbar, AppBar, Stack, Typography, Box, Card, Grid2 as Grid, Fade } from '@mui/material'
import Layout from './Layout';
import Logo from '../assets/Logo.png';

import React from 'react'
import Typed from 'typed.js';
import Title from './Title';

import { WHITEPAPER } from '../../zyphria-data';

function Whitepaper() {
  const { TITLE, CONTENT } = WHITEPAPER;

  return (
    <Layout id="Whitepaper">
      <Typography variant="h3" textAlign="center" sx={{ fontStyle: 'italic' }}>
        {TITLE}
      </Typography>

      <Typography sx={{ color: 'gray', whiteSpace: 'pre-wrap' }}>
        {CONTENT}
      </Typography>
    </Layout>
  )
}

export default Whitepaper
