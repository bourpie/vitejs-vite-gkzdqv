import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MyCounter from '../Components/MyCounter';
import MyCart from '../Components/MyCart';

function Home() {
  return (
    <Container>
      <Typography>Home</Typography>
      <MyCounter />
      <MyCart />
    </Container>
  );
}

export default Home;
