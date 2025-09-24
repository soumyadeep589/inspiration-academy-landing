import Box from '@mui/material/Box';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import { useRouter } from "next/router";
import { FC } from 'react';
import { navigations } from './navigation.data';

interface NavigationProps {
  onLinkClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ onLinkClick }) => {
  const router = useRouter();
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => {
        const isActive = router.asPath === destination;
        return (
          <Link href={destination} key={destination} passHref>
            <MuiLink>
              <Box
                onClick={onLinkClick}
                sx={{
                  position: 'relative',
                  color: isActive ? "primary.main" : "text.disabled",
                  cursor: 'pointer',
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  px: { xs: 0, md: 3 },
                  mb: { xs: 3, md: 0 },
                  fontSize: { xs: '1.2rem', md: 'inherit' },
                  '& > div': { display: 'none' },
                  '&:hover': {
                    color: 'primary.main',
                    '&>div': {
                      display: 'block',
                    },
                  },
                }}
              >

                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    transform: 'rotate(3deg)',
                    '& img': { width: 44, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
                {label}
              </Box>
            </MuiLink>
          </Link>
        )
      }

      )}
    </Box>
  )
}

export default Navigation
