import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BannerSCSS from './banner.scss';

const Banner = ({ backgroundImage, subtitle, title }) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500"
          src="https://www.sciencenews.org/wp-content/uploads/2019/09/091119_mt_antisolar_feat.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500px"
          src="https://www.sciencenews.org/wp-content/uploads/2019/09/091119_mt_antisolar_feat.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height="500px"
          src="https://www.sciencenews.org/wp-content/uploads/2019/09/091119_mt_antisolar_feat.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
