import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/img_1.png';
import img2 from '../images/img_2.png';
import img3 from '../images/img_3.png';
import img4 from '../images/img_4.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 100px)',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',

    background: 'linear-gradient(62.93deg, #97ccf0 19.68%, #5218fa 89.55%)',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: '#ffffff',
  },
};

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    // speed: 800,
    autoplaySpeed: 2000,
    // autoplaySpeed: 1000,
    cssEase: 'linear',
    centerPadding: '60px',
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Phonebook</h1>

      <Slider {...settings}>
        <div className={styles.container}>
          <img src={img1} alt={'phone'} />
        </div>
        <div>
          <img src={img2} alt={'phone'} />
        </div>
        <div>
          <img src={img3} alt={'phone'} />
        </div>
        <div>
          <img src={img4} alt={'phone'} />
        </div>
      </Slider>
    </div>
  );
}
