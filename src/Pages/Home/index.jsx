import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MyCounter from '../Components/MyCounter';
import MyCart from '../Components/MyCart';
import MyCatImg from '../Components/MyCatImg';

function Home() {
  return (
    <Container>
      <Typography>Home</Typography>
      <MyCounter />
      <MyCart />
      <MyCatImg />
    </Container>
  );
}

export default Home;
