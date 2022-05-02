import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MyForm() {
  const [article, setArticle] = useState({
    title: '',
    body: '',
  });

  const dispatch = useDispatch();

  const navigateTo = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADDARTICLE',
      payload: article,
    });

    setArticle({
      title: '',
      body: '',
    });

    navigateTo('/');
  };

  const handleInputs = (e) => {
    if (e.target.classList.contains('inp-title')) {
      const newObjectState = {
        ...article,
        title: e.target.value,
      };
      setArticle(newObjectState);
    } else if (e.target.classList.contains('inp-body')) {
      const newObjectState = {
        ...article,
        body: e.target.value,
      };
      setArticle(newObjectState);
    }
  };

  console.log(article);

  return (
    <form onSubmit={handleForm}>
      <label htmlFor="title">Titre</label> <br />
      <input
        onChange={handleInputs}
        type="text"
        id="title"
        value={article.title}
        className="inp-title"
      />
      <br />
      <label htmlFor="text">Texte</label> <br />
      <textarea
        onChange={handleInputs}
        value={article.body}
        className="inp-body"
        id="text"
        cols="30"
        rows="10"
      ></textarea>
      <br />
      <button type="submit">Sauvegarder</button>
    </form>
  );
}

export default MyForm;
