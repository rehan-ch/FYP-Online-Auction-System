import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        bgcolor: '#1A1A19',
        color: 'white',
        p: 1,
      }}
    >
      <Box
        sx={{
          my: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <IconButton
          sx={{ fontSize: '60px', color: '#E1306C' }}
          onClick={() => window.open('https://www.instagram.com')}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          sx={{ fontSize: '60px', color: '#1DA1F2' }}
          onClick={() => window.open('https://www.twitter.com')}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          sx={{ fontSize: '60px', color: '#24292E' }}
          onClick={() => window.open('https://www.github.com')}
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          sx={{ fontSize: '60px', color: '#FF0000' }}
          onClick={() => window.open('https://www.youtube.com')}
        >
          <YouTubeIcon />
        </IconButton>
      </Box>

      <Typography
        variant="h5"
        sx={{
          "@media (max-width:600px)": { fontSize: '1rem' },
          "&:hover": {
            color: 'goldenrod',
            transform: 'translateY(-5px)',
            transition: 'all 0.4s',
          },
        }}
      >
        All Rights Reserved &copy; 2023
      </Typography>

      <Typography variant="caption" sx={{ mt: 1 }}>
        Explore our amazing content and subscribe to our channels!
      </Typography>
    </Box>
  );
};

export default Footer;
