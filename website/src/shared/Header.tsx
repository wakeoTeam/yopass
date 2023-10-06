import { AppBar, Toolbar, Typography, Button, Box, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const isOnUploadPage = location.pathname.includes('upload');
  const base = process.env.PUBLIC_URL || '';
  const home = base + '/#/';
  const upload = base + '/#/upload';
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        marginBottom: 4,
        boxShadow: 0,
        borderBottom: 1,
        borderColor: 'grey.300'
      }}
    >
      <Toolbar>
        <Link href={home} color="inherit" underline="none">
          <Typography variant="h6" component="div">
            <Box
              sx={{
                verticalAlign: 'middle',
                paddingRight: '25px',
                marginTop: '-5px',
                height: '30px',
              }}
              component="img"
              height="40"
              alt=""
              src="wakeo.png"
            />
            Secrets Sharing Tool
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
