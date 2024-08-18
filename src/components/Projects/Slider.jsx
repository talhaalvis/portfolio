import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "/assets/project/oac.png",
    disc: `Online Truck Booking App with online payment and multi language translation`,
    demo: "https://oacexpress.com/",
  },
  {
    img: "/assets/project/picswagger.png",
    disc: `typically printed and shipped images cards, where upload images fron canva ,facebook, instagram and edit your
 images. With stripe payment and trace shipped status.
    `,
    // demo: "https://picswagger.com/",
  },
  {
    img: "/assets/project/szld.png",
    disc: "Sizzld is built by gamblers for gamblers. With our unique community and a huge selection of games like Crash, HashDice, Plinko, Slots, and many more. Your greatest casino adventure is waiting for you!",
    // demo: "https://szld.herokuapp.com/",
  },
  {
    img: "/assets/project/Capture.PNG",
    disc: "This is AuctionWala website like E-Commerace but it is not E-commerace site he  is bidding website where seller and buyer can bid your projects like upwork also chat and calling feature",
    demo: "https://auctionwale-frontend.vercel.app/",
  },
  {
    img: "/assets/project/Capture1.PNG",
    disc: "This is AuctionWala website like E-Commerace but it is not E-commerace site he  is bidding website where seller and buyer can bid your projects like upwork also chat and calling feature",
    demo: "https://auctionwale-frontend.vercel.app/",
  },
  {
    img: "/assets/project/Capture2.PNG",
    disc: "This is AuctionWala website like E-Commerace but it is not E-commerace site he  is bidding website where seller and buyer can bid your projects like upwork also chat and calling feature",
    demo: "https://auctionwale-frontend.vercel.app/",
  },
  {
    img: "/assets/project/c.PNG",
    disc: "This EMR website this project have a super admin and and company functionality this is Doctor Manage and hospital Manage system where super Admin will train and company can answer and question session.",
    demo: "https://orange-moss-004688710.5.azurestaticapps.net/",
  },
  {
    img: "/assets/project/c1.PNG",
    disc: "This EMR website this project have a super admin and and company functionality this is Doctor Manage and hospital Manage system where super Admin will train and company can answer and question session.",
    demo: "https://orange-moss-004688710.5.azurestaticapps.net/",
  },
  {
    img: "/assets/project/c2.PNG",
    disc: "This EMR website this project have a super admin and and company functionality this is Doctor Manage and hospital Manage system where super Admin will train and company can answer and question session.",
    demo: "https://orange-moss-004688710.5.azurestaticapps.net/",
  },
  {
    img: "/assets/project/Goosefix.png",
    disc: "GoesFix is job Find project . In this GoesFix you can find your ideal Dream job you can apply on jobs and Get a job.",
    // demo: "https://szld.herokuapp.com/",
  },
  // {
  //   img: "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
  //   disc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!",
  //   demo: "/",
  // },
  // {
  //   img: "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
  //   disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum`,
  //   demo: "/",
  // },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: var(--primaryColor);
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
