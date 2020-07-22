import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <React.Fragment>
      <Styles>
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <div className='about'>
                <p className='lead'>
                  A simple web application that allows users to track the
                  current state of COVID-19 pandemic across the world.
                </p>
                <div className='text-center'>
                  <h5>Github pages</h5>
                  <p>
                    You can click the button below to see the code on Github
                  </p>
                  <a
                    className='btn btn-outline-secondary mx-3'
                    href='https://github.com/samuel-antwi/covid-19-tracker'
                    target='_blank'
                    rel='noreferre noopener'>
                    View Code
                  </a>
                  <Link className='btn btn-outline-secondary' to='/'>
                    Home
                  </Link>
                </div>
                <div className='text-center py-5'>
                  <h5>API</h5>
                  <a href='https://disease.sh/'>diseases.sh</a> <br />
                  <a href='https://covid19.mathdro.id/api'>
                    https://covid19.mathdro.id/api
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Styles>
    </React.Fragment>
  );
};

export default About;

const Styles = styled.div`
  height: 100vh;

  .about {
    padding-top: 150px;
  }
`;
