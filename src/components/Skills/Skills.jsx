import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <div className="skill-wrapper">
          <Title title="Skills" />
          {skills.map((skill) => {
            const { id, type, skillNameList } = skill;
            const itemNames = skillNameList.map((name) => <li>{name}</li>);

            return (
              <Row key={id}>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <Col>
                    <div className="skill-wrapper__type">
                      <h1>{type}</h1>
                    </div>
                  </Col>
                  <Col>
                    <div className="skill-wrapper__item-name">
                      <ul>{itemNames}</ul>
                    </div>
                  </Col>
                </Fade>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
