import { styled } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";

const Image = styled('img')({
    width: 250.175,
    height: 336.936,
    flexShrink: 0,
    borderRadius:10
})

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <Slider {...settings} className="sliderCrausel">
          <div>
            <Image src="https://cdn.pixabay.com/photo/2020/11/09/22/20/tower-bridge-5727975_1280.jpg" alt="loading"/>
            <h3>NOIDA</h3>
          </div>
          <div>
            <Image src="https://cdn.pixabay.com/photo/2019/10/01/14/05/landscape-4518381_1280.jpg" alt="loading"/>
            <h3>GOA</h3>
          </div>
          <div>
            <Image src="https://cdn.pixabay.com/photo/2021/01/30/18/07/salzburg-5964812_1280.jpg" alt="loading"/>
            <h3>BIHAR</h3>
          </div>
          <div>
            <Image src="https://cdn.pixabay.com/photo/2021/07/15/17/55/fishermans-bastion-6469128_1280.jpg" alt="loading"/>
            <h3>PANJAB</h3>
          </div>
          <div>
          <Image src="https://cdn.pixabay.com/photo/2021/02/06/12/31/dresden-5987976_1280.jpg" alt="loading"/>
            <h3>UTAR PARDESH</h3>
          </div>
          <div>
          <Image src="https://cdn.pixabay.com/photo/2021/01/30/18/07/salzburg-5964812_1280.jpg" alt="loading"/>
            <h3>SHIMLA</h3>
          </div>
          <div>
          <Image src="https://cdn.pixabay.com/photo/2019/10/01/14/05/landscape-4518381_1280.jpg" alt="loading"/>
            <h3>HIMANCHAL</h3>
          </div>
        </Slider>
      </div>
    );
  }
}