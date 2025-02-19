import { Box } from '@mui/material'; 

const StyledImage = ({ src, alt, sx = {} }) => {
  const defaultStyles = {
    border: '3px solid',
    borderColor: 'primary.dark',
    '&:hover': {
      borderColor: 'primary.main',
    },
  };

  return (
    <Box
      component='img'
      src={src}
      alt={alt}
      sx={{ ...defaultStyles, ...sx }}
    />
  );
};

export default StyledImage;