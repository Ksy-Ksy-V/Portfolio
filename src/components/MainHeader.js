import { Typography } from '@mui/material';

const MainHeader = ({ textOne, highlightText, textTwo }) => {
  return (
    <Typography 
      variant='h4' 
      color={'primary.dark'} 
      mt='6rem'
    >
      {`< ${textOne} `}
      <Typography 
        component='span' 
        variant='h4'
        sx={{ 
            color: 'primary.main',
            '&:hover': {
                textDecoration: 'underline wavy'
            }
        }}
      >
        {highlightText}
      </Typography>
      {` ${textTwo} >`}
    </Typography>
  );
}

export default MainHeader;