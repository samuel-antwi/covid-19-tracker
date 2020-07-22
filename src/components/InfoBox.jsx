import React, { useContext } from 'react';
import styled from 'styled-components';
import { APIContext } from '../context/APIContext';
import { Card, Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import moment from 'moment';
import image from '../images/image.png';

const InfoBox = () => {
  const { data, isLoading, countryIso2, countryCode } = useContext(APIContext);
  const {
    cases,
    recovered,
    deaths,
    updated,
    todayCases,
    todayRecovered,
    todayDeaths,
  } = data;

  if (isLoading) {
    return null;
  }
  const time = moment(updated).format('dddd MMMM Do YYYY');

  return (
    <React.Fragment>
      <Styles>
        <Container className='py-5'>
          <Row>
            <Col className='mb-5 covid' md={{ span: 6, offset: 3 }}>
              <img src={image} alt='COVID-19' />
            </Col>
          </Row>
          {countryCode !== 'global' ? (
            <div className='text-center mb-4 country'>
              <p>{countryCode}</p>
              <img
                src={`https://www.countryflags.io/${countryIso2}/shiny/64.png`}
              />
            </div>
          ) : (
            <div className='globe h3'>
              <p className='text-center font-weight-bold mt-4 text-muted'>
                <i className='fas fa-globe text-success'></i> GLOBAL
              </p>
            </div>
          )}
          <Row>
            <Col md={4} className='mb-4'>
              <Card className='cases'>
                <Card.Body>
                  <Card.Title className='text-muted font-weight-bold'>
                    Total Cases
                  </Card.Title>
                  <Card.Text className='h2'>
                    <CountUp start={0} end={cases} duration={3} separator=',' />
                  </Card.Text>
                  <Card.Text className='text-muted'>{time}</Card.Text>
                  <Card.Text className='lead'>
                    Number of all active cases of COVID-19
                  </Card.Text>
                  <Card.Title className='text-muted font-weight-bold'>
                    Today Cases -{' '}
                    <CountUp
                      start={0}
                      end={todayCases}
                      duration={2.5}
                      separator=', '
                    />
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className='mb-4'>
              <Card className='recovered'>
                <Card.Body>
                  <Card.Title className='text-muted font-weight-bold'>
                    Total Recovered
                  </Card.Title>
                  <Card.Text className='h2'>
                    <CountUp
                      start={0}
                      end={recovered}
                      duration={3}
                      separator=','
                    />
                  </Card.Text>
                  <Card.Text className='text-muted'>{time}</Card.Text>
                  <Card.Text className='lead'>
                    Number of people who have recovered from COVID-19
                  </Card.Text>
                  <Card.Title className='text-muted font-weight-bold'>
                    Today Recovery -{' '}
                    <CountUp
                      start={0}
                      end={todayRecovered}
                      duration={2.5}
                      separator=', '
                    />
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className='mb-4'>
              <Card className='deaths'>
                <Card.Body>
                  <Card.Title className='text-muted font-weight-bold'>
                    Total Deaths
                  </Card.Title>
                  <Card.Text className='h2'>
                    <CountUp
                      start={0}
                      end={deaths}
                      duration={3}
                      separator=','
                    />
                  </Card.Text>
                  <Card.Text className='text-muted'>{time}</Card.Text>
                  <Card.Text className='lead'>
                    Number of all deaths caused by COVID-19
                  </Card.Text>
                  <Card.Title className='text-muted font-weight-bold'>
                    Today deaths -{' '}
                    <CountUp
                      start={0}
                      end={todayDeaths}
                      duration={2.5}
                      separator=', '
                    />
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Styles>
    </React.Fragment>
  );
};

export default InfoBox;

const Styles = styled.div`
  .cases {
    border: 10px solid #ffa500;
  }
  .recovered {
    border: 10px solid #00ffab;
  }

  .deaths {
    border: 10px solid #ff6666;
  }

  .card {
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .country p {
    margin-bottom: -12px;
  }
  @media (max-width: 600px) {
    .covid img {
      width: 70%;
      display: block;
      margin: auto;
    }
  }
`;
