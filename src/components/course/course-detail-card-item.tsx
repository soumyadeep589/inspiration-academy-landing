import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArrowForward from '@mui/icons-material/ArrowForward'
import { Course } from '@/interfaces/course'
import { Grid } from '@mui/material'
import { StyledButton } from '../styled-button'

interface Props {
  item: Course
}

const CourseDetailCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 6 },
        mb: 4,
        backgroundColor: 'background.paper',
        borderRadius: 4,
      }}
    >
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8} order={{ xs: 1, md: 0 }}>
            <Box sx={{ pr: { xs: 2, md: 12 } }}>
              <Typography component="h2" variant="h2" mb={4} fontSize={{ xs: 24, md: 36 }}>{item.title}</Typography>
              <Typography sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.6 }}>{item.description}</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <Typography sx={{ mb: 4, fontSize: { xs: 16, md: 18 }, color: 'text.secondary' }}>Duration: <Typography component="mark" sx={{ fontWeight: 'bold', fontSize: { xs: 18, md: 20 }, color: 'secondary.main', backgroundColor: 'transparent' }}>{item.duration}</Typography></Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: { xs: 4, md: 0 } }}>
                <StyledButton variant="contained" endIcon={<ArrowForward />} size="large">Get Started</StyledButton>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ lineHeight: 0, overflow: 'hidden', borderRadius: 3 }}>
              <Image src={item.cover} width={760} height={760} alt={'Course ' + item.id} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default CourseDetailCardItem
