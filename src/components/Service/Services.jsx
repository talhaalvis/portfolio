import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"web designer"}
            disc={`I love designs and it's the first step before creating any website as I can give layout to my imagination.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={CgWebsite}
            title={"web delevopment"}
            disc={`I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={FiCodesandbox}
            title={"Problem Solving"}
            disc={`I love solving problems whether programming problems or real life problems.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
