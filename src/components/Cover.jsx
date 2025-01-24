import React from 'react'
import { useState, useEffect } from 'react'
import { Button, Toolbar, AppBar, Stack, Typography, Box, Card, Grid2 as Grid, Fade } from '@mui/material'
import Typed from 'typed.js';
import '../App.css'
import '../index.css'

function Cover() {
  const el = React.useRef(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
   
  }, []);

  return (
    <div class="bg-animation">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>
    </div>
  )
}

export default Cover
