import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'react-router-dom';
import CameraIcon from '@mui/icons-material/PhotoCamera';

function MyNavbar() {
  return (
    <AppBar position="relative" color="default" elevation={0}>
      <nav>
        <Container>
          <Toolbar disableGutters={true}>
            <CameraIcon sx={{ mr: 2 }} />
            <Typography variant="h6" color="inherit" noWrap>
              Company name
            </Typography>

            <Link
              variant="button"
              color="text.primary"
              to=""
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              to="/produits"
              sx={{ my: 1, mx: 1.5 }}
            >
              Products
            </Link>
            <Link
              variant="button"
              color="text.primary"
              to="/ecrire"
              sx={{ my: 1, mx: 1.5 }}
            >
              Écrire
            </Link>
          </Toolbar>
        </Container>
      </nav>
    </AppBar>
  );
}

export default MyNavbar;
