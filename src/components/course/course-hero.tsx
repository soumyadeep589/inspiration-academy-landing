import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { Link as ScrollLink } from 'react-scroll'
import { StyledButton } from '@/components/styled-button'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

interface Exp {
  label: string
  value: string
}
interface ExpItemProps {
  item: Exp
}

const exps: Array<Exp> = [
  {
    label: 'Students',
    value: '10K+',
  },
  {
    label: 'Quality Course',
    value: '20+',
  },
  {
    label: 'Experience Mentors',
    value: '10+',
  },
]

const ExpItem: FC<ExpItemProps> = ({ item }) => {
  const { value, label } = item
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 2, md: 1 } }}>
      <Typography
        sx={{ color: 'secondary.main', mb: { xs: 1, md: 0 }, fontSize: { xs: 34, md: 44 }, fontWeight: 'bold' }}
      >
        {value}
      </Typography>
      <Typography color="text.secondary" variant="h5">
        {label}
      </Typography>
    </Box>
  )
}

const CourseHero: FC = () => {
  return (
    <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 8, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, px: { xs: 2, md: 10 } }}>
          <Box sx={{ mb: { xs: 2, md: 4 } }}>
            <Typography
              component="h1"
              variant="h1"
              sx={{ color: 'text.primary', fontSize: { xs: 24, md: 64 }, fontWeight: 'bold', mb: 2, letterSpacing: 1.3, lineHeight: 1.2 }}
            >
              Advance your professional skills with our courses
            </Typography>
          </Box>
          <Box sx={{ px: { xs: 4 } }}>
            <Typography
              sx={{ color: 'text.secondary', fontSize: { xs: 12, md: 24 }, letterSpacing: 1 }}
            >
              Build skills with our courses and mentor from world-class companies.
            </Typography>
          </Box>
        </Box>
        <Box sx={{ boxShadow: 2, py: 6, px: 7, borderRadius: 4 }}>
          <Grid container spacing={2}>
            {exps.map((item, index) => (
              <Grid key={index + item.label} item xs={12} md={4}>
                <ExpItem item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default CourseHero