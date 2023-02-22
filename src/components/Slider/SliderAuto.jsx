import './SliderAuto.css';
import img from './images/image5.jpg';
import img2 from './images/image3.jpg';
import img3 from './images/image2.jpg';
import img1 from './images/image1.jpg';

export default function Slider() {
    let counter = 1;

    setInterval(() => {
      document.getElementById('radio' + counter).checked = true;
      counter += 1;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);

  return (
    <div className="container-slider">
        <div className="slider">
      <div className="slides">
        <input type="radio" name="radio-btn" id="radio1" />
        <input type="radio" name="radio-btn" id="radio2" />
        <input type="radio" name="radio-btn" id="radio3" />
        <input type="radio" name="radio-btn" id="radio4" />
        <div className="slide first">
            <img className="img-slide" src={ img } alt="" />
        </div>
        <div className="slide">
          <img className="img-slide" src={ img2 } alt="" />
        </div>
        <div className="slide">
          <img className="img-slide" src={ img3 } alt="" />
        </div>
        <div className="slide">
          <img className="img-slide" src={ img1 } alt="" />
        </div>
      </div>
      <div className="navigation-manual">
        <label htmlFor="radio1" className="manual-btn"></label>
        <label htmlFor="radio2" className="manual-btn"></label>
        <label htmlFor="radio3" className="manual-btn"></label>
        <label htmlFor="radio4" className="manual-btn"></label>
      </div>
    </div>
    </div>
  );
}
