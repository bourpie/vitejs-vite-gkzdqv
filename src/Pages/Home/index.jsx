import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MyCounter from '../../Components/MyCounter';
import MyCart from '../../Components/MyCart';
import MyCatImg from '../../Components/MyCatImg';
import MyCard from '../../Components/MyCard';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../../store/articleReducer';
import './styles.scss';

function Home() {
  const [articlesData, setArticlesData] = useState([]);
  const { articles } = useSelector((state) => ({
    ...state.articleReducer,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (articles.length === 0) {
      dispatch(getArticles());
    }
  }, []);

  return (
    <Container className="home">
      <h1>Tous les articles</h1>
      <section className="cards" aria-label="Les articles">
        {articles &&
          articles.map((card) => (
            <MyCard key={card.id}>
              <h2>{card.title}</h2>
              <p>{card.body}</p>
              <a href="">Lire la suite</a>
            </MyCard>
          ))}
      </section>
    </Container>
  );
}

export default Home;
