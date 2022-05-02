import { useState } from 'react';
import dataSlider from './dataSlider';
import './MySlider.scss';

function MySlider() {
  const [slideAnim, setSlideAnim] = useState({
    index: 1,
    inProgress: false,
  });

  return (
    <div className="container-slider">
      {dataSlider.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideAnim.index === index + 1 ? 'slide active-anim' : 'slide'
            }
          >
            {obj.title}
          </div>
        );
      })}
    </div>
  );
}

export default MySlider;
