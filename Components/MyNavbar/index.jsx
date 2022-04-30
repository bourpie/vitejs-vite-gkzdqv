import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
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
              href="/"
              sx={{ my: 1, mx: 1.5 }}
            >
              Home
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/produits"
              sx={{ my: 1, mx: 1.5 }}
            >
              Products
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Training
            </Link>
          </Toolbar>
        </Container>
      </nav>
    </AppBar>
  );
}

export default MyNavbar;
