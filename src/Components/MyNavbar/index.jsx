import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import CameraIcon from '@mui/icons-material/PhotoCamera';

function MyNavbar() {
  return (
    <AppBar position="relative" color="default" elevation={0}>
      <nav>
        <Container>
          <Toolbar disableGutters={true}>
            <Typography variant="h6" color="inherit" noWrap>
              MyBlog
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: 'none',
                display: 'flex',
                gap: '1rem',
              }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/produits">Products</Link>
              </li>
              <li>
                <Link to="/ecrire">Écrire</Link>
              </li>
            </Box>
          </Toolbar>
        </Container>
      </nav>
    </AppBar>
  );
}

export default MyNavbar;
