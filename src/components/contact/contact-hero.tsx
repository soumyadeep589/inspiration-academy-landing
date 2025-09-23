import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

const ContactHero: FC = () => {
    return (
        <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 6, pb: { xs: 4, md: 4 } }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: { xs: 2, md: 6 } }}>
                    <Box sx={{ mb: { xs: 2, md: 2 } }}>
                        <Typography
                            component="h1"
                            variant="h1"
                            sx={{ color: 'text.primary', fontSize: { xs: 30, md: 48 }, fontWeight: 'bold', letterSpacing: 1, lineHeight: 1.2 }}
                        >
                            Get in Touch with Us
                        </Typography>
                    </Box>
                    <Box sx={{ px: { xs: 2 } }}>
                        <Typography
                            sx={{ color: 'text.secondary', fontSize: { xs: 18, md: 20 } }}
                        >
                            Have questions or need  solutions? Let us know by filling out the form, and we’ll be in touch!
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default ContactHero