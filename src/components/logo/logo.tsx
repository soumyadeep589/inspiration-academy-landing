import { Box } from '@mui/material'
import { FC } from 'react'

interface Props {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Logo: FC<Props> = ({ onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: onClick ? 'pointer' : 'default',
        height: '100%', // Ensures vertical centering within parent
      }}
    >
      <img
        src="/images/inspiration-logo-black.png"
        alt="Inspiration Logo"
        style={{ height: 70 }}
      />
    </Box>
  )
}

Logo.defaultProps = {
  variant: 'primary',
}

export default Logo
