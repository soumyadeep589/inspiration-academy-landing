import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy Accessable',
    description: 'Learn anytime, anywhere with simple access to resources.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'More Affordable Cost',
    description: 'Quality education at prices that fit every budget.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Study Time',
    description: 'Set your own schedule and study at your pace.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Consultation With Mentor',
    description: 'Get personalized guidance and support from expert mentors.',
    icon: <ContactSupportIcon />,
  },
]
