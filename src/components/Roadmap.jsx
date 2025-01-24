import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Layout from './Layout';
import Title from './Title';

import { ROADMAP } from '../../zyphria-data';
import { TimelineOppositeContent } from '@mui/lab';

export default function Roadmap() {
  const { TITLE, SUBTITLE, TIMELINES } = ROADMAP;
  const theme = useTheme();

  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Layout id="Roadmap">
      <Title title={TITLE} subtitle={SUBTITLE} />
      <Timeline position={onlySmallScreen ? 'right' : 'alternate'}>
        {
          TIMELINES.map(({ title, description, status, heading }, e) => (
            <TimelineItem key={e}>
              {onlySmallScreen && <TimelineOppositeContent sx={{ display: 'none' }}></TimelineOppositeContent>}
              <TimelineSeparator>
                <TimelineDot variant="outlined" sx={{
                  background:
                    status === 'PLANNED' ? 'grey' : status === 'COMPLETED' ? '#00F700' : '#4150FA'
                }} />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Stack spacing={2} sx={{ py: 5 }}>
                  <Typography variant="overline">{heading}</Typography>
                  <Typography variant="h5" fontWeight={700}>{title}</Typography>
                  <Typography variant="body2" sx={{ color: 'gray' }}>{description}</Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
          ))
        }
      </Timeline>
    </Layout>

  );
}