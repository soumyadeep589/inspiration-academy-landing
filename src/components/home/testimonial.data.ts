import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Strong Foundation in Computers',
    content:
      'The Introduction to Computer course helped me understand the basics clearly. From hardware to software, everything was explained in a simple way that made learning enjoyable.',
    user: {
      id: 1,
      name: 'Luis Sera',
      professional: 'Student',
      photo: '1.jpg',
    },
  },
  {
    id: 2,
    title: 'Best Programming Experience!',
    content:
      'I took the Introduction to Programming course with Java, Python, and PHP. The hands-on approach gave me confidence to write code and build small projects right away.',
    user: {
      id: 2,
      name: 'Riski',
      professional: 'Software Engineer',
      photo: '2.jpg',
    },
  },
  {
    id: 3,
    title: 'Clear & Practical Accounting',
    content:
      'The GST & Tally course was very practical and easy to follow. I can now manage accounts and taxation for my business without depending on others.',
    user: {
      id: 3,
      name: 'Nguyễn Văn',
      professional: 'Business Owner',
      photo: '3.jpg',
    },
  },
  {
    id: 4,
    title: 'Creative Graphic Design Learning',
    content:
      'The Graphic Design course using Photoshop and Illustrator was amazing. I learned how to create professional logos and posters that impressed my clients.',
    user: {
      id: 4,
      name: 'Diana Jordan',
      professional: 'Freelance Designer',
      photo: '4.jpg',
    },
  },
  {
    id: 5,
    title: 'Relaxing & Energizing Yoga',
    content:
      'Joining the Yoga course was life-changing. The postures and breathing techniques helped me reduce stress, stay active, and improve my overall health.',
    user: {
      id: 5,
      name: 'Ashley Graham',
      professional: 'Yoga Enthusiast',
      photo: '5.jpg',
    },
  },
]
