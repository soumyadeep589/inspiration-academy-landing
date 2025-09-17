import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

import CourseDetailCardItem from './course-detail-card-item'
import { data } from './courses.data'


const CourseList: FC = () => {
  return (
    <Box
      id="popular-course"
      sx={{
        pt: {
          xs: 6,
          md: 8,
        },
        pb: 14,
        backgroundColor: 'background.default',
      }}
    >
      <Typography
        component="h2"
        variant="h2"
        sx={{ textAlign: 'center', mb: { xs: 4, md: 8 }, fontSize: { xs: 30, md: 40 } }}
      >
        Our Popular Courses
      </Typography>
      <Container maxWidth="lg">
        {data.map((item) => <CourseDetailCardItem key={String(item.id)} item={item} />)}
      </Container>
    </Box>
  )
}

export default CourseList
