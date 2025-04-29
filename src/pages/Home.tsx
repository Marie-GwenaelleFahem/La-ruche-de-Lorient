import { useState, useEffect } from 'react';
import '../styles.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2, image3];
  const intervalTime = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, [images.length, intervalTime]);

  return (
    <section id="home-section">
      <div className="carousel-container">
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ display: index === currentIndex ? 'block' : 'none' }}
          >
            <img src={image} alt={`Image ${index + 1}`} />
            <div className="home-content">
              <h2>Bienvenue dans le monde des abeilles !</h2>
              <p>Découvrez notre passion pour l'apiculture et les trésors de la ruche.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;