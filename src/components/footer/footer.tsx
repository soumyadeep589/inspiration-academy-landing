import { FooterNavigation, FooterSocialLinks } from '@/components/footer'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: 'primary.main', py: { xs: 6, md: 10 }, color: 'primary.contrastText' }}
    >
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12} md={5}>
            <Box sx={{ width: { xs: '100%', md: 360 }, mb: { xs: 3, md: 0 }, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
                Inspiration
              </Typography>
              <Typography variant="body2" sx={{ letterSpacing: 0.8, mb: 4 }}>
                Inspiration is an learning academy that has been operating since 2023 until now.
              </Typography>
              <Typography variant="body2" sx={{ letterSpacing: 0.8 }}>
                +91 9775042486
              </Typography>
              <Typography variant="body2" sx={{ letterSpacing: 0.8, mb: 2 }}>
                inspiration.academy2025@gmail.com
              </Typography>
              <FooterSocialLinks />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <FooterNavigation />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
