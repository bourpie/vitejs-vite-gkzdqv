import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatImg } from '../../store/imageReducer';

function MyForm() {
  return (
    <form>
      <label htmlFor="title">Titre</label> <br />
      <input type="text" id="title" />
      <br />
      <label htmlFor="text">Texte</label> <br />
      <textarea id="text" cols="30" rows="10"></textarea>
      <br />
      <button>Sauvegarder</button>
    </form>
  );
}

export default MyForm;
