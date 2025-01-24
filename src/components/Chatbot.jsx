import { ThemeProvider } from 'styled-components';
import React from 'react'

import ChatBot from 'react-simple-chatbot';

import { NIKKA } from '../../zyphria-data';

function Chatbot() {
  const theme = {
    background: '#111',
    headerBgColor: '#1e1e1e',

    headerFontColor: '#fff',
    headerFontSize: '16px',

    botBubbleColor: '#1e1e1e',
    userBubbleColor: '#1e1e1e',

    botFontColor: '#FFF',
    userFontColor: '#FFF',
  };
  return (

    <ThemeProvider theme={theme}>
      <ChatBot steps={NIKKA} />
    </ThemeProvider>
  )
}

export default Chatbot
