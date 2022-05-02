import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MyCounter from '../../Components/MyCounter';
import MyCart from '../../Components/MyCart';
import MyCatImg from '../../Components/MyCatImg';
import MyCard from '../../Components/MyCard';
import MySlider from '../../Components/MySlider/MySlider';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
      <section className="my-slider">
        <MySlider />
      </section>
      <section className="cards" aria-label="Les articles">
        {articles &&
          articles.map((article) => (
            <MyCard key={article.id}>
              <h2>{article.title}</h2>
              <p>{article.body}</p>
              <Link
                to={`article/${article.title.replace(/\s+/g, '-').trim()}`}
                state={{
                  title: article.title,
                  body: article.body,
                }}
              >
                Lire l'article
              </Link>
            </MyCard>
          ))}
      </section>
    </Container>
  );
}

export default Home;
