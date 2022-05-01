import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCatImg } from '../../store/imageReducer';
import './MyCatImg.scss';

function MyCatImg() {
  const [catImgUrl, setCatImgUrl] = useState('');
  const { imgUrl } = useSelector((state) => ({
    ...state.imageReducer,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatImg());
  }, []);

  return (
    <section>
      <h1>Random cat</h1>

      <div className="my-cat-img">{imgUrl && <img src={imgUrl} alt="" />}</div>
    </section>
  );
}

export default MyCatImg;
