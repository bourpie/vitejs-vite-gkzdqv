import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocation } from 'react-router-dom';

function Article() {
  const location = useLocation();

  return (
    <Container>
      <h1>{location.state.title}</h1>
      <div>Contenu</div>
    </Container>
  );
}

export default Article;
