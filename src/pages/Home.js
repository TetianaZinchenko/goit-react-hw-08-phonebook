import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/img_1.png';
import img2 from '../images/img_2.png';
import img3 from '../images/img_3.png';
import img4 from '../images/img_4.png';
import { Title } from 'components/App/App.styled';

const styles = {
  container: {
    background: 'linear-gradient(62.93deg, #97ccf0 19.68%, #5218fa 89.55%)',
  },

  img: {
    width: '100%',
  },
};

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    centerPadding: '60px',
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div style={styles.container}>
      <Title>Phonebook</Title>

      <Slider {...settings}>
        <div>
          <img src={img1} alt={'phone'} style={styles.img} />
        </div>
        <div>
          <img src={img2} alt={'phone'} style={styles.img} />
        </div>
        <div>
          <img src={img3} alt={'phone'} style={styles.img} />
        </div>
        <div>
          <img src={img4} alt={'phone'} style={styles.img} />
        </div>
      </Slider>
    </div>
  );
}
