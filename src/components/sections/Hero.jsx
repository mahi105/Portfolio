import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/HeroImage.png";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
`;

const ResumeButton = styled.a`
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  background: rgb(67,61,139);
background: radial-gradient(circle, rgba(67,61,139,1) 0%, rgba(79,117,255,1) 100%);

  box-shadow: rgba(23, 92, 230, 0.2) 0px 4px 12px; /* Initial subtle glow */
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;
  color: white;
  transition: box-shadow 0.3s ease;

  /* Hover effect with a subtle white-purple glow */
  &:hover {
    box-shadow: 0 0 12px rgba(175, 82, 222, 0.6), 0 0 15px rgba(255, 255, 255, 0.4);
  }
`;


const Img = styled.img`
  border-radius: 50%;
  width: 300px;
  max-width: 1000px;
  height: 300px;
  border: 2px solid ${({ theme }) => theme.primary};
`;

const Hero = () => {
  return (
    <HeroContainer>
      <StarCanvas />
      <HeroInnerContainer>
        <motion.div {...headContainerAnimation}>
          <Title>
            Hi, I am <br /> {Bio.name}
          </Title>
          <TextLoop>
            I am a
            <Span>
              <Typewriter
                options={{ strings: Bio.roles, autoStart: true, loop: true }}
              />
            </Span>
          </TextLoop>
          <SubTitle>{Bio.description}</SubTitle>
          <ResumeButton href="https://drive.google.com/file/d/1h7Q0TFdzsizGkCj5SomNMJ7ISULxgR1A/view?usp=drive_link" target="_blank">
            My Resume
          </ResumeButton>

          
        </motion.div>
        <motion.div {...headContentAnimation}>
          <Tilt>
            <Img src={HeroImg} alt="Your Image" />
          </Tilt>
        </motion.div>
      </HeroInnerContainer>
    </HeroContainer>
  );
};

export default Hero;
